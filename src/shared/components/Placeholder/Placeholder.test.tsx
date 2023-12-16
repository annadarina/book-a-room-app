import React from 'react';
import { render, screen } from '@testing-library/react';
import Placeholder from './index';

describe('Placeholder Component', () => {
  const placeholderMessage = 'Test Placeholder Message';

  it('renders the message correctly', () => {
    render(<Placeholder message={placeholderMessage} />);

    const messageElement = screen.getByText(placeholderMessage);
    expect(messageElement).toBeInTheDocument();
  });
});
