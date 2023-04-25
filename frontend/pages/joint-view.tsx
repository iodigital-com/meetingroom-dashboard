import React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import CampusComponent from '@/components/list-components/campus';
import { CampusListProps } from 'utils/types';

const CampusListContainer = styled.div`
	padding: 1rem;
  margin: 0 auto;
	display: flex;
`;

const CampusListDiv = styled.div`
	display: flex;
	flex-direction: column;
	overflow-x: scroll;
	width: 50%;
`;

const CampusMapDiv = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
`;

const CampusListTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const CampusList: NextPage<CampusListProps> = ({ data, componentList }) => {

	return (
		<>
			<CampusListContainer >
				<CampusListDiv>
					<CampusListTitle>Meeting rooms</CampusListTitle>
					{
						data.map((campus) => (
							<span key={campus.id}>
								<CampusComponent campus={campus} />
							</span>
						))
					}
				</CampusListDiv>
				<CampusMapDiv>
					{
						componentList?.map((component: React.FunctionComponent, idx: number) => (
							<span key={idx}>
								{	
									React.createElement(component, {
										key: idx,
									})
								}
							</span>
						))
					}
				</CampusMapDiv>
			</CampusListContainer>
		</>
	);
};

export default CampusList;
