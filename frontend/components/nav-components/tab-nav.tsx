import React, { useState } from 'react';
import styled from 'styled-components';
import Amsterdam1Map from '@/components/map-components/amsterdam1';
import Amsterdam2Map from '@/components/map-components/amsterdam2';
import ListPage from 'pages/list-view';
import JointViewPage from 'pages/joint-view';
import PageNotFound from 'pages/page-not-found';
import CampusPreformattedData from '@/components/data-components/meeting-rooms.json';
import { CampusDataType, TabViewProps, ComponetHashType, CampusDataArrayType } from 'utils/types';

const TabContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100vw;
	height: 100vh;
	padding-top: 50px;
	gap: 20px;
	align-items: center;
`;

const TabNav = styled.div`
	position: fixed;
	top: 15px;
	right: 60px;
	display: flex;
	flex-direction: column;
	height: 150px;
`;

const TabContent = styled.div`
  margin-right: auto;
  margin-top: 150px;

  &.__map-only {
    margin-left: 250px;
  }
`;

const TabButton = styled.button`
	width: 100px;
	height: 20px;
	background-color: #f5f5f5;
	color: #000;

	&.activeTab {
		background-color: #5A5A5A;
		color: #fff;
	}

	&:hover {
		background-color: green;
		color: #fff;
	}
`;

const Components: {[key: string]: React.FC<any>} = {
	amsterdam1: Amsterdam1Map,
	amsterdam2: Amsterdam2Map
};

const getCampusName = (content: string) => content.slice(0, -1);

const TabView = ({ tabs, data }: TabViewProps) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => setIsOpen(!isOpen);
	const handleClick = (index: number) => setActiveIndex(index);

	const campusName = getCampusName(tabs[0].content)
  const preformattedData = CampusPreformattedData as CampusDataType;
	const campusId = preformattedData[campusName];

	const displayComponent = (label: string, content: string, campusObject: CampusDataArrayType, data: any) => {
		const componetHash: ComponetHashType = {
			'Map View': React.createElement(Components[content], {
				block: content
			}),
			'List View': <ListPage campuses={campusObject[content]} data={data} />,
			'Joint View': <JointViewPage campuses={campusObject[content]} data={data} componentList={[Amsterdam1Map, Amsterdam2Map]} />
		}

		return componetHash[label]  || <PageNotFound />
	}

	return (
		<TabContainer>
			<TabNav>
				<TabButton onClick={toggleDropdown}>Views { !isOpen ? <span>&#x25BC;</span> : <span>&#x25B2;</span> } </TabButton>
				{isOpen && (
					tabs.map((tab, index) => (
						<TabButton
							key={tab.label}
							className={index === activeIndex ? 'activeTab' : undefined}
							onClick={() => handleClick(index)}
						>
							{tab.label}
						</TabButton>
					)))}
			</TabNav>
			<TabContent className={activeIndex === 0 ? '__map-only' : ''}>
				{
					displayComponent(tabs[activeIndex].label, tabs[activeIndex].content, campusId, data)
				}
			</TabContent>
		</TabContainer>
	);
}

export default TabView;