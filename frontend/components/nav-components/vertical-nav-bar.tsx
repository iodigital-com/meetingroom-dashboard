import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { NavProps } from 'utils/types';
import Accordion from './accordion';

const Nav = styled.nav<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ isOpen }) =>  isOpen ? '250px' : '0'};
  height: 100%;
  padding: 1rem;
  background-color: #fff;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(-250px)'};
  transition: transform 0.3s ease-in-out;
  
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

const NavButton = styled.button`
  border: none;
  display: block;
  cursor: pointer;
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  font-size: 1.5rem;
  color: #000;
  background-color: transparent;
  font-size: 1.125rem;
`;

const NavItemLink = styled(Link)`
  display: block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  margin-left: 1rem;
  color: #000;

  &.home {
    margin-top: 5px;
    position: fixed;
  }

  &:hover {
    color: #fff;
    background-color: #5A5A5A;
  }
`;

const Hamburger = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: 0.2rem;
  right: 0.5rem;
  width: 50px;
  height: 50px;
  background-color: transparent;
  color: #000;
  border: none;
  cursor: pointer;

  & span {
    display: block;
    width: 25px;
    height: 3px;
    margin: 0.5rem auto;
    background-color: #000;
    transition: transform 0.3s ease-in-out;
  }

  & span:first-child {
    transform: ${({ isOpen }) =>
    isOpen ? 'rotate(45deg) translate(7px, 7px)' : 'none'};
  }

  & span:nth-child(2) {
    opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
  }

  & span:last-child {
    transform: ${({ isOpen }) =>
    isOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none'};
  }
`;

const NavBarDiv = ({ navItems }: NavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCampus, setSelectedCampus] = useState('');

  const toggleNav = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  const handleCampusSelect = (campus: string) => {
    setSelectedCampus(campus);
  };

  const floors = [
    { id: '3.1', label: 'Amsterdam1', path: '/maps/amsterdam1', campus: 'Amsterdam' },
    { id: '3.2', label: 'Amsterdam2', path: '/maps/amsterdam2', campus: 'Amsterdam' },
    { id: '3.3', label: 'Rotterdam1', path: '/maps/rotterdam1', campus: 'Rotterdam' },
  ];

  const filteredFloors = floors.filter(floor => floor.campus === selectedCampus);

  return (
    <div>
      <Hamburger isOpen={isOpen} onClick={toggleNav}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <NavItemLink href="/" className='home'><img src="/io.svg" alt="home" /></NavItemLink>
      <Nav isOpen={isOpen} >
        <NavList>
          {navItems && navItems.map((navItem) => (
            <li key={navItem.id}>
              {navItem.path ? (
                <NavItemLink href={navItem.path}>{navItem.label}</NavItemLink>
              ) : (
                <Accordion key={navItem.id} label={navItem.label}>
                  {navItem.subItems &&
                    navItem.subItems.map((subitem) => (
                      <NavButton key={subitem.id} onClick={() => handleCampusSelect(subitem.label)}>
                        {subitem.label}
                      </NavButton>
                    ))}
                </Accordion>
              )}
            </li>
          ))}
          <Accordion key="floors" label="Floors">
            {filteredFloors.map((floor) => (
              <NavItemLink key={floor.id} href={floor.path}>
                {floor.label}
              </NavItemLink>
            ))}
          </Accordion>
        </NavList>
      </Nav>
    </div>
  );
};

export default NavBarDiv;