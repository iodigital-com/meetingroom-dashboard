import { useEffect, useRef, useState } from 'react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { NavProps, NavItem as NavItemProps } from 'utils/types';

const Container = styled.div<{ $primary?: boolean; $scrolled?: boolean }>`
  position: ${(props) => (!props.$primary ? 'fixed' : 'relative')};
  background-color: ${(props) => (!props.$primary ? '#ffffff' : 'transparent')};
  transform: ${(props) => (!props.$primary ? 'translateY(-90px)' : 'none')};
  opacity: ${(props) => (!props.$primary ? (props.$scrolled ? 1 : 0) : 1)};
  box-shadow: ${(props) =>
    !props.$primary ? '1px 3px 5px 0px rgba(0, 0, 0, 0.1)' : 'none'};
  padding-top: ${(props) => (!props.$primary ? '1.125rem' : '0.75rem')};
  padding-bottom: ${(props) => (!props.$primary ? '1.125rem' : '0.75rem')};
  padding-left: ${(props) => (!props.$primary ? '3rem' : '6.5rem')};
  padding-right: ${(props) => (!props.$primary ? '3rem' : '6.5rem')};

  display: flex;
  width: 100%;
  transition: opacity 0.3s ease-in-out;
`;

const NavItemLink = styled(Link)<{ $primary?: boolean }>`
  display: block;
  text-decoration: none;
  color: #fff;
  background-color: transparent;
  position: relative;

  img {
    height: ${(props) => (!props.$primary ? '40px' : '65px')};
  }
`;

const Nav = styled.nav<{ $primary?: boolean }>`
  flex-direction: ${(props) => (!props.$primary ? 'row-reverse' : 'column')};
  justify-content: ${(props) => (!props.$primary ? '' : 'space-between')};
  align-items: ${(props) => (!props.$primary ? 'center' : '')};
  gap: ${(props) => (!props.$primary ? '3rem' : '')};

  display: flex;
  margin-left: 2.5rem;
  width: 100%;
`;

const TopNav = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;
`;

const BottomNav = styled.div<{ $primary?: boolean }>`
  justify-content: ${(props) => (!props.$primary ? 'flex-end' : 'flex-start')};

  display: flex;
  gap: 3rem;
  font-size: 1.125rem;
  font-weight: 700;
`;

const NavItem = styled.a`
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  position: relative;
`;

const Popover = styled.div`
  position: absolute;
  top: 1.5rem;
  min-width: 17.5rem;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  padding: 2rem 3rem;
`;

const ArrowIcon = styled(ArrowForwardIcon)``;

const PopoverContent = styled.div`
  cursor: pointer;
  margin: 0.5rem;
  height: auto;
  color: #fff;
  font-weight: normal;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  &:hover {
    ${ArrowIcon} {
      transition: transform 0.3s ease-in-out;
      transform: translateX(10px);
    }
  }
`;

// TODO: Pass in static nav items as props
const staticNavItems: NavItemProps[] = [
  {
    id: '2',
    label: 'Email',
    path: 'mailto:business@iodigital.com',
  },
];

const HorizontalNavBar = ({ navItems, primary }: NavProps) => {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState<NavItemProps | null>(null);
  const [selectedCampus, setSelectedCampus] = useState('');
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setIsPopoverVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (navItem: NavItemProps) => {
    setActiveItem(navItem);
    setIsPopoverVisible(true);
  };

  const handleMouseLeave = () => {
    setIsPopoverVisible(false);
  };

  const handleSubItemClick = (subItem: NavItemProps) => {
    setSelectedCampus(subItem.label);
    setIsPopoverVisible(false);
  };

  const floors = [
    {
      id: '3.1',
      label: 'Amsterdam1',
      path: '/maps/amsterdam1',
      campus: 'Amsterdam',
    },
    {
      id: '3.2',
      label: 'Amsterdam2',
      path: '/maps/amsterdam2',
      campus: 'Amsterdam',
    },
    {
      id: '3.3',
      label: 'Rotterdam1',
      path: '/maps/rotterdam1',
      campus: 'Rotterdam',
    },
  ];

  const filteredFloors = selectedCampus
    ? floors.filter((floor) => floor.campus === selectedCampus)
    : floors.filter((floor) => floor.campus === 'Amsterdam');

  return (
    <Container
      ref={popoverRef}
      $primary={primary}
      $scrolled={scrollPosition > 90}
    >
      <NavItemLink href="/" className="home" $primary={primary}>
        <img src="/io.svg" alt="home" />
      </NavItemLink>
      <Nav $primary={primary}>
        <TopNav>
          {staticNavItems?.map((item) => (
            <NavItem key={`tNav-${item.id}`} href={item.path}>
              {item.label}
              {item.subItems && <img src="/caret.svg" alt="caret" />}
            </NavItem>
          ))}
        </TopNav>
        <BottomNav $primary={primary}>
          {navItems?.map((item: NavItemProps) => (
            <NavItem
              key={`bNav-${item.id}`}
              href={item.path}
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
            >
              {item.label}
              {item.subItems && <img src="/caret.svg" alt="caret" />}
              {isPopoverVisible && activeItem === item && (
                <Popover>
                  {item.subItems?.map((subItem, index) => (
                    <PopoverContent
                      key={index}
                      onClick={() => handleSubItemClick(subItem)}
                    >
                      {subItem.label}
                      <ArrowIcon />
                    </PopoverContent>
                  ))}
                </Popover>
              )}
            </NavItem>
          ))}

          {/* Floor */}
          <NavItem
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() =>
              handleMouseEnter({ id: 'floor', label: 'Floor' })
            }
          >
            Floor
            <img src="/caret.svg" alt="caret" />
            {isPopoverVisible && activeItem?.label === 'Floor' && (
              <Popover>
                {filteredFloors?.map((subItem, index) => (
                  <PopoverContent
                    key={index}
                    onClick={() => {
                      handleMouseLeave();
                      if (subItem.path) router.push(subItem.path);
                    }}
                  >
                    {subItem.label}
                    <ArrowIcon />
                  </PopoverContent>
                ))}
              </Popover>
            )}
          </NavItem>
        </BottomNav>
      </Nav>
    </Container>
  );
};

export default HorizontalNavBar;
