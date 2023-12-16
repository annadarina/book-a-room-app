import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from './index';

describe('Loader component', () => {
  test('renders Loader component', () => {
    render(<Loader />);

    expect(screen.getByRole('status')).toBeInTheDocument();

    const loadingMessage = screen.getByText('Loading...');
    expect(loadingMessage).toBeInTheDocument();
  });
});
