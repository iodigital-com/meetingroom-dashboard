import { useState, useEffect } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { fetchData, fetchDataFromServer } from 'utils/api';
import moment from 'moment';
import TabView from '@/components/nav-components/tab-nav';
import campusHashNames from '@/components/data-components/campus-hash.json';
import { MapPageProps, MapPageData, CampusNameHash } from 'utils/types';
import config from 'config/config';

const getCampusName = (content: string) => content.slice(0, -1);

const getFormattedCampusData = (campusData: MapPageData['campusData']) => {
	const formattedCampusData = {
		id: campusData.scheduleId.split('.')[0],
		schedules: campusData.scheduleItems.map((item: any) => ({
			start: item.start.dateTime,
			end: item.end.dateTime,
			subject: item.subject,
			location: item.location
		}))
	}
	return formattedCampusData;
}

type CampusData = {
	id: string;
	schedules: {
		start: string;
		end: string;
		subject: string;
	}[];
}[];

export default function MapPage({ data }: MapPageProps) {
	const [campusData, setCampusData] = useState<CampusData>([]);

	useEffect(() => {
		const campusNameHash: CampusNameHash = campusHashNames

		async function fetchDataAndUpdateState() {
			try {
				const body = JSON.stringify({
					method: 'POST',
					url: `${config.BASE_URL}/GetAllRooms?code=${config.API_KEY}`,
					data: {
						start: moment(),
						end: moment().add(15, 'hours'),
						campus: campusNameHash[getCampusName(data.slug)],
						intervals: 15,
					}
				});
				const response = await fetchDataFromServer('/api/proxy', 'POST', body);
				const responseData = await response.json();

				const formattedCampusData: CampusData = responseData.map(getFormattedCampusData);
				setCampusData(formattedCampusData);
			} catch (error) {
				console.log('fetchDataAndUpdateState ---> AxiosError', error)
			}
		}

		function formatCampusData() {
			const _campusData: CampusData = data.campusData.map(getFormattedCampusData);
			setCampusData(_campusData);
		}

		formatCampusData();

		const intervalId = setInterval(() => {
			fetchDataAndUpdateState();
		}, 120000); // Fetch data every 2 minutes

		return () => {
			clearInterval(intervalId); // Clean up interval on component unmount
		};
	}, []);

	return (
		<TabView tabs={[
			{ label: 'Map View', content: data.slug },
			{ label: 'List View', content: data.slug },
			{ label: 'Joint View', content: data.slug }
		]}
			data={campusData}
		/>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const pages = ['amsterdam1', 'amsterdam2'];
	const paths = pages.map((slug) => ({ params: { slug } }));

	return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<MapPageProps> = async ({ params }) => {
	const slug = params?.slug as string;
	const campusName = getCampusName(slug)

	const campusNameHash: CampusNameHash = campusHashNames

	const response = await fetchData(`${config.BASE_URL}/GetAllRooms?code=${config.API_KEY}`, 'post', {
		start: moment(),
		end: moment().add(15, 'hours'),
		campus: campusNameHash[campusName],
		intervals: 15
	});

	const data: MapPageData = { slug, campusData: response.data }
	return { props: { data } };
};