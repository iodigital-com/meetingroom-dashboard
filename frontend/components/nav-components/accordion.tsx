import { useState } from 'react';
import styled from 'styled-components';
import { AccordionProps } from 'utils/types';

const NavItemDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  color: #000;
  background-color: #f5f5f5;
`;

const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  color: #000;
`;


const Accordion = ({ children, label }: AccordionProps ) => {
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleAccordion() {
    setIsExpanded((setIsExpanded) => !setIsExpanded);
  }

  return (
    <>
      <NavItemDiv onClick={toggleAccordion}>
        {label}
        <StyledButton
          aria-label={isExpanded ? 'Collapse submenu' : 'Expand submenu'}
          onClick={toggleAccordion}
        >
          {isExpanded ? '-' : '+'}
        </StyledButton>
      </NavItemDiv>
      {isExpanded && children}
    </>
  );
}

export default Accordion;