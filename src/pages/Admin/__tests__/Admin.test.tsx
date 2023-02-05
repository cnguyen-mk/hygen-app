import React from 'react';
import { render, screen } from '@testing-library/react';
import { Admin } from '../';

test('renders component successfully', () => {
  render(<Admin  />);
  const element = screen.getByTestId(/test/i);
  expect(element).toBeInTheDocument();
});
