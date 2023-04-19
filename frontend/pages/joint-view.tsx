import React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import ListView from './list-view';
import { CampusListProps } from 'utils/types';
import mediaQueries from 'utils/mediaQueries';

const CampusListContainer = styled.div`
	padding: 1rem;
  margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr;

	${mediaQueries.medium} {
    display: flex;
		flex-direction: column-reverse;
  }
`;

const CampusMapDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: -5rem;
`;

const CampusList: NextPage<CampusListProps> = ({ campuses, data, component }) => {

	return (
		<>
			<CampusListContainer >
				<ListView campuses={campuses} data={data} />
				<CampusMapDiv>
					{
						React.createElement(component, {
							key: 'campusMap',
						})
					}
				</CampusMapDiv>
			</CampusListContainer>
		</>
	);
};

export default CampusList;
