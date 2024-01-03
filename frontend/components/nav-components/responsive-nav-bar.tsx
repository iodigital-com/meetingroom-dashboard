import HorizontalNavBar from './horizontal-nav-bar';
import VerticalNavBar from './vertical-nav-bar';
import styled from 'styled-components';
import { NavProps } from 'utils/types';
import mediaQueries from 'utils/mediaQueries';

const ResponsiveNavBarDiv = styled.div`
  ${mediaQueries.medium} {
    display: none;
  }
`;

const ResponsiveVerticalNavBarDiv = styled.div`
  display: none;

  ${mediaQueries.medium} {
    display: block;
  }
`;

const ResponsiveNavBar = (props: NavProps) => {
  return (
    <>
      <ResponsiveNavBarDiv>
        <HorizontalNavBar {...props} primary={true} />
        <HorizontalNavBar {...props} primary={false} />
      </ResponsiveNavBarDiv>
      <ResponsiveVerticalNavBarDiv>
        <VerticalNavBar {...props} />
      </ResponsiveVerticalNavBarDiv>
    </>
  );
};

export default ResponsiveNavBar;
