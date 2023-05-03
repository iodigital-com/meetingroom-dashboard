import React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import ListView from './list-view';
import { CampusListProps } from 'utils/types';
import mediaQueries from 'utils/mediaQueries';
import { Components } from 'utils/helpers';

const CampusListContainer = styled.div`
  padding: 1rem;
  margin: 0 auto;
  width: 100%;
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

const JointCampusView: NextPage<CampusListProps> = ({
  campuses,
  data,
  content,
}) => {
  const _content = content || 'amsterdam1';

  return (
    <>
      <CampusListContainer>
        <ListView campuses={campuses} data={data} />
        <CampusMapDiv>
          {_content
            ? React.createElement(Components[_content], {
              block: _content,
              data: data
            })
            : null}
        </CampusMapDiv>
      </CampusListContainer>
    </>
  );
};

export default JointCampusView;
