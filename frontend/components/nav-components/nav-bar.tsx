import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { NavProps, NavItem } from 'utils/types';
import Accordion from './accordion';

const Nav = styled.nav<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
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

const NavItemLink = styled(Link)`
  display: block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: #000;

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

const NavBarDiv = ({ items }: NavProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => setIsOpen((prevIsOpen) => !prevIsOpen)

  return (
    <>
      <Hamburger isOpen={isOpen} onClick={toggleNav}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <Nav isOpen={isOpen}>
        <NavList>
          {items.map((item) => (
            <li key={item.id}>
              {item.path ? <NavItemLink href={item.path}>{item.label}</NavItemLink> :
              <Accordion key={item.id} label={item.label}>
                {item.subitems && item.subitems.map((subitem) => (
                  subitem.subitems && (
                    <Accordion key={subitem.id} label={subitem.label}>
                      {subitem.subitems.map((subsubitem) => (
                        <NavItemLink key={subsubitem.id} href={`${subsubitem.path}`} >{subsubitem.label}</NavItemLink>
                      ))}
                    </Accordion>
                  )
                ))}
              </Accordion>}
            </li>
          ))}
        </NavList>
      </Nav>
    </>
  );
}

const NavBar = () => {
  const navItems: NavItem[] = [
    { id: '1', label: 'Home', path: '/' },
    { id: '2', label: 'Campuses', subitems: [
      { 
        id: '2.1',
        label: 'Amsterdam',
        subitems: [
          { id: '2.1.1', label: 'Amsterdam1', path:'/maps/amsterdam1'},
          { id: '2.1.2', label: 'Amsterdam2', path:'/maps/amsterdam2'}
        ]
      }]
    },
  ];

  return <NavBarDiv items={navItems} />;
}

export default NavBar;