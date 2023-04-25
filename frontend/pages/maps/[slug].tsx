import { useState, useEffect } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { fetchData } from 'utils/axios';
import moment from 'moment';
import NavBar from '@/components/nav-components/nav-bar';
import TabView from '@/components/nav-components/tab-nav';
import campusHashNames from '@/components/data-components/campus-hash.json';
import { MapPageProps, MapPageData, CampusNameHash } from 'utils/types';
import config from 'config/config';

const getCampusName = (content: string) => content.slice(0, -1); 

export default function MapPage({ data }: MapPageProps) {
	type CampusData = {
		id: string;
		schedules: {
			start: string;
			end: string;
			subject: string;
		}[];
	}[];

	const [campusData, setCampusData] = useState<CampusData>([]);

	useEffect(() => {
		function formatCampusData() {
			const campuseData1: CampusData = data.campusData.map(getFormattedCampusData)
			setCampusData(campuseData1)
		}

		formatCampusData()
	}, []);


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

	return (
		<div>
			<NavBar />
			<TabView tabs={[
				{ label: 'Map View', content: data.slug },
				{ label: 'List View', content: data.slug },
				{ label: 'Joint View', content: data.slug}
			]}
				data={campusData}
			/>
		</div>
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
		end: moment().add(1, 'hours'),
		campus: campusNameHash[campusName],
		intervals: 15
	});

	  const data: MapPageData = { slug, campusData: response.data }
	return { props: { data } };
};

