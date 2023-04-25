import React, { useState } from 'react';
import styled from 'styled-components';
import Amsterdam1Map from '@/components/map-components/amsterdam1';
import Amsterdam2Map from '@/components/map-components/amsterdam2';
import ListPage from 'pages/list-view';
import JointViewPage from 'pages/joint-view';
import PageNotFound from 'pages/page-not-found';
import CampusPreformattedData from '@/components/data-components/meeting-rooms.json';
import {
  CampusDataType,
  TabViewProps,
  ComponetHashType,
  CampusDataArrayType,
} from 'utils/types';
import mediaQueries from 'utils/mediaQueries';

const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  padding-top: 5rem;
`;

const TabNav = styled.div`
  position: fixed;
  top: 2rem;
  right: 3rem;
  display: flex;
  flex-direction: column;

  ${mediaQueries.medium} {
    top: 0.5rem;
    right: 4rem;
  }
`;

const TabContent = styled.div`
  margin-right: auto;
  margin-top: 5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.25rem;

  &.__map-only {
    flex-grow: 1;
  }
`;

const TabButton = styled.button`
  width: 6rem;
  height: 2rem;
  border: none;
  cursor: pointer;
  padding: 0.125rem 0.2rem;
  background-color: transparent;
  color: #000;
  text-align: center;
  font-size: 1.125rem;
  display: flex;
  gap: 0.2rem;

  img {
    position: relative;
    margin-top: 0.3rem;
    margin-left: 0.5rem;
    height: 1.25rem;
    width: 1.25rem;
  }

  div {
    display: inline-block;
  }

  &.activeTab {
    background-color: #5a5a5a;
    color: #fff;
  }
`;

const Components: { [key: string]: React.FC<any> } = {
  amsterdam1: Amsterdam1Map,
  amsterdam2: Amsterdam2Map,
};

const getCampusName = (content: string) => content.slice(0, -1);

const TabView = ({ tabs, data }: TabViewProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleClick = (index: number) => {
    setActiveIndex(index);
    setIsOpen(false);
  };

  const campusName = getCampusName(tabs[0].content);
  const preformattedData = CampusPreformattedData as CampusDataType;
  const campusId = preformattedData[campusName];

  const displayComponent = (
    label: string,
    content: string,
    campusObject: CampusDataArrayType,
    data: any
  ) => {
    const componetHash: ComponetHashType = {
      'Map View': React.createElement(Components[content], {
        block: content,
      }),
      'List View': <ListPage campuses={campusObject[content]} data={data} />,
      'Joint View': (
        <JointViewPage
          campuses={campusObject[content]}
          data={data}
          component={Components[content]}
        />
      ),
    };

    return componetHash[label] || <PageNotFound />;
  };

  return (
    <TabContainer>
      <TabNav>
        <TabButton className="__header" onClick={toggleDropdown}>
          Views <img src="/caret.svg" alt="caret" />{' '}
        </TabButton>
        {isOpen &&
          tabs.map((tab, index) => (
            <TabButton
              key={tab.label}
              className={index === activeIndex ? 'activeTab' : undefined}
              onClick={() => handleClick(index)}
            >
              {tab.label}
            </TabButton>
          ))}
      </TabNav>
      <TabContent className={activeIndex === 0 ? '__map-only' : ''}>
        {displayComponent(
          tabs[activeIndex].label,
          tabs[activeIndex].content,
          campusId,
          data
        )}
      </TabContent>
    </TabContainer>
  );
};

export default TabView;
