import { NextPage } from 'next';
import styled from 'styled-components';
import CampusComponent from '@/components/list-components/campus';
import { CampusListProps } from 'utils/types';
import mediaQueries from 'utils/mediaQueries';

const CampusListContainer = styled.div`
  display: flex;
  margin-left: 10px;
  flex-direction: column;
  overflow-x: scroll;
  white-space: nowrap;

  ${mediaQueries.medium} {
    width: 100vw;
  }

  /* Set transparent scrollbar by default */
  &::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 7px;
    border: 4px solid transparent;
  }

  /* Change scrollbar color on hover and active */
  &:hover::-webkit-scrollbar-thumb,
  &:active::-webkit-scrollbar-thumb {
    background-color: #dcdbdc;
    border: 4px solid #ffffff;
  }

  /* Firefox */
  & {
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
  }

  &:hover,
  &:active {
    scrollbar-color: #dcdbdc #ffffff;
  }
`;

const CampusListTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const CampusList: NextPage<CampusListProps> = ({ campuses, data }) => {
  const campusArray = campuses?.map(
    (campus) => campus.name.toLocaleLowerCase().replace(' ', '') || []
  );

  return (
    <CampusListContainer>
      <CampusListTitle>Meeting rooms</CampusListTitle>
      {data?.length
        ? data.map(
            (campus) =>
              campusArray.includes(campus.id) && (
                <span key={campus.id}>
                  <CampusComponent campus={campus} />
                </span>
              )
          )
        : null}
    </CampusListContainer>
  );
};

export default CampusList;
