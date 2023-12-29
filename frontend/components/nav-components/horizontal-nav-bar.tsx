import { useEffect, useRef, useState } from 'react';
import { NavProps, NavItem as NavItemProps } from 'utils/types';
import { ArrowForwardIcon } from '@chakra-ui/icons';

import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

const Container = styled.div`
  display: flex;
  width: 100%;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 6.5rem;
  padding-right: 6.5rem;
`;

const NavItemLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: #fff;
  background-color: transparent;
  position: relative;

  img {
    height: 65px;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-left: 2.5rem;
  justify-content: space-between;
  width: 100%;
`;

const TopNav = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;
`;

const BottomNav = styled.div`
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

const HorizontalNavBar = ({ navItems }: NavProps) => {
  const router = useRouter();
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState<NavItemProps | null>(null);
  const [selectedCampus, setSelectedCampus] = useState('');

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
    <Container ref={popoverRef}>
      <NavItemLink href="/" className="home">
        <img src="/io.svg" alt="home" />
      </NavItemLink>
      <Nav>
        <TopNav>
          {staticNavItems?.map((item) => (
            <NavItem key={`tNav-${item.id}`} href={item.path}>
              {item.label}
              {item.subItems && <img src="/caret.svg" alt="caret" />}
            </NavItem>
          ))}
        </TopNav>
        <BottomNav>
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
