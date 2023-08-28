import React from 'react';
import { screen, render } from '@testing-library/react';
import Dashboard from '@pages/Dashboard';

describe('Dashboard', () => {
  test('Should render Dashboard', () => {
    render(<Dashboard />);

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });
});
