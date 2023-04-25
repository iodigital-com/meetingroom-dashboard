import { NextPage } from 'next';
import styled from 'styled-components';
import CampusComponent from '@/components/list-components/campus';
import { CampusListProps } from 'utils/types';

const CampusListContainer = styled.div`
	padding: 1rem;
  margin: 0 auto;
`;

const CampusListTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const CampusList: NextPage<CampusListProps> = ({ campuses, data }) => {
	const campusArray = campuses.map((campus) => campus.name.toLocaleLowerCase().replace(' ', ''))

	return (
		<>
			<CampusListContainer >
				<CampusListTitle>Meeting rooms</CampusListTitle>
				{
					data.map((campus) => (
						campusArray.includes(campus.id) &&
						<span key={campus.id}>
							<CampusComponent campus={campus} />
						</span>
					))
				}
			</CampusListContainer>
		</>
	);
};

export default CampusList;
