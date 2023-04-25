import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { NavProps, NavItem } from 'utils/types';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 1rem;
  background-color: #fff;
  display: flex;
  gap: 30px;
  justify-content: center;

  .home {
    position: fixed;
    left: 0.5rem;
  }
`;

const Popover = styled.div`
  position: absolute;
  top: 70px;
  width: 200px;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  padding: 10px 0;
`;

const PopoverContent = styled.div`
  cursor: pointer;
  margin: 0.5rem;
  height: auto;
  color: #fff;
`;

const PopoverPointer = styled.div`
  position: absolute;
  top: -10px;
  left: 20%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 10px 10px 10px;
  border-color: transparent transparent rgba(0, 0, 0, 0.7) transparent;
`;

const NavContainerDiv = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
`;

const NavItemDiv = styled.div`
  cursor: pointer;
  height: 60px;
  width: 150px;
  display: flex;
  align-items: center;
  img {
    position: relative;
    margin-top: 0.25rem;
    margin-left: 0.5rem;
    height: 20px;
    width: 20px;
  }
`;

const NavItemLink = styled(Link)`
  display: block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: #fff;
  background-color: transparent;
  position: relative;

  &:hover {
    color: #fff;
    background-color: #5a5a5a;

    &.home {
      background-color: transparent;
    }
  }
`;

// HorizontalNavBar component displays a horizontal navigation bar with multiple navigation items and sub-items (including campus and floor).
const HorizontalNavBar = ({ navItems }: NavProps) => {
  // States for handling popover visibility and active items
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const [isFloorPopoverVisible, setIsFloorPopoverVisible] = useState(false);
  const [activeItem, setActiveItem] = useState<NavItem | null>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const [selectedCampus, setSelectedCampus] = useState('');

  // useEffect for closing the popover when clicking outside of it
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

  // Array of floor objects containing id, label, path, and campus
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

  // Function to filter floors based on selected campus
  const getFloorsByCampus = (selectedCampus: string) => {
    // Filter floors based on the selected campus
    const filteredFloors = floors.filter(
      (floor) => floor.campus === selectedCampus
    );

    // If no campus is selected or the selected campus has no floors, return the floors of the first campus by default
    if (!selectedCampus || filteredFloors.length === 0) {
      const defaultCampus = floors[0].campus;
      return floors.filter((floor) => floor.campus === defaultCampus);
    }

    return filteredFloors;
  };

  // Event handlers for showing and hiding popover on mouse enter and leave
  const handleMouseEnter = (navItem: NavItem) => {
    setActiveItem(navItem);
    setIsPopoverVisible(true);
  };

  const handleMouseLeave = () => {
    setIsPopoverVisible(false);
  };

  // Event handlers for showing and hiding floor popover on mouse enter and leave
  const handleMouseEnterFloor = () => {
    setIsFloorPopoverVisible(true);
  };

  const handleMouseLeaveFloor = () => {
    setIsFloorPopoverVisible(false);
  };

  // Event handler for updating selected campus on sub-item click
  const handleSubItemClick = (subItem: NavItem) => {
    setSelectedCampus(subItem.label);
    setIsPopoverVisible(false);
  };

  // Event handler for hiding floor popover on floor item click
  const handleFloorItemClick = () => {
    setIsFloorPopoverVisible(false);
  };

  // Render navigation bar with navigation items and their sub-items, as well as the floor items
  return (
    <Nav>
      <NavItemLink href="/" className="home">
        <img src="/io.svg" alt="home" />
      </NavItemLink>
      <NavContainerDiv ref={popoverRef}>
        {navItems &&
          navItems.map((navItem, index) => (
            <NavItemDiv
              key={index}
              onMouseEnter={() => handleMouseEnter(navItem)}
              onMouseLeave={handleMouseLeave}
            >
              {navItem.label}
              <img src="/caret.svg" alt="caret" />
              {isPopoverVisible && activeItem === navItem && (
                <Popover>
                  <PopoverPointer />
                  {navItem.subItems &&
                    navItem.subItems.map((subItem, index) => (
                      <PopoverContent
                        key={index}
                        onClick={() => handleSubItemClick(subItem)}
                      >
                        {subItem.label}
                      </PopoverContent>
                    ))}
                </Popover>
              )}
            </NavItemDiv>
          ))}
        <NavItemDiv
          key="floor"
          onMouseEnter={handleMouseEnterFloor}
          onMouseLeave={handleMouseLeaveFloor}
        >
          Floor
          <img src="/caret.svg" alt="caret" />
          {isFloorPopoverVisible && (
            <Popover>
              <PopoverPointer />
              {getFloorsByCampus(selectedCampus).map((floor) => (
                <NavItemLink
                  key={floor.id}
                  href={floor.path}
                  onClick={handleFloorItemClick}
                >
                  {floor.label}
                </NavItemLink>
              ))}
            </Popover>
          )}
        </NavItemDiv>
      </NavContainerDiv>
    </Nav>
  );
};

export default HorizontalNavBar;
