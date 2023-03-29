import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Accordion from '../accordion';

describe('Accordion', () => {
  const label = 'Test Accordion';
  const content = <div>Accordion Content</div>;

  it('renders without crashing', () => {
    render(<Accordion label={label}>{content}</Accordion>);
    const accordionLabel = screen.getByText(label);
    expect(accordionLabel).toBeInTheDocument();
  });

  it('renders in collapsed state initially', () => {
    render(<Accordion label={label}>{content}</Accordion>);
    const accordionContent = screen.queryByText('Accordion Content');
    expect(accordionContent).not.toBeInTheDocument();
  });

  it('expands and collapses on button click', () => {
    render(<Accordion label={label}>{content}</Accordion>);
    const accordionButton = screen.getByText(label);

    // Expand accordion
    fireEvent.click(accordionButton);
    const expandedAccordionContent = screen.getByText('Accordion Content');
    expect(expandedAccordionContent).toBeInTheDocument();
    
    // Collapse accordion
    fireEvent.click(accordionButton);
    const collapsedAccordionContent = screen.queryByText('Accordion Content');
    expect(collapsedAccordionContent).not.toBeInTheDocument();
  });
});
