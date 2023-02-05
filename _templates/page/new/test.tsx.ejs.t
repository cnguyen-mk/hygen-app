---
to: src/pages/<%= Name || 'NewPage' %>/__tests__/<%= Name %>.test.tsx
---
import React from 'react';
import { render, screen } from '@testing-library/react';
import { <%= Name %> } from '../';

test('renders component successfully', () => {
  render(<<%= Name %>  />);
  const element = screen.getByTestId(/test/i);
  expect(element).toBeInTheDocument();
});
