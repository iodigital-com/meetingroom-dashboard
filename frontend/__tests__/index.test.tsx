import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import Home from '../pages/index';

describe('Home', () => {
  it('renders the heading', () => {
    render(<Home />);
    const heading = screen.queryByText(
      'Welcome to iO meeting room app where you can see available meeting rooms in real time'
    );
    expect(heading).toBeInTheDocument();
  });

  // Add more tests for your components and their functionality
});
