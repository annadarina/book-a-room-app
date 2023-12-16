import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './index';

describe('Button Component', () => {
  const onClickMock = jest.fn();

  it('renders button with correct styles for primary variant', () => {
    render(<Button variant="primary">Book!</Button>);

    const button = screen.getByRole('button');

    expect(button).toHaveClass('bg-primary');
    expect(button).toHaveTextContent('Book!');
  });

  it('renders button with correct styles for secondary variant', () => {
    render(<Button variant="secondary">Book!</Button>);

    const button = screen.getByRole('button');

    expect(button).toHaveClass('bg-secondary');
    expect(button).toHaveTextContent('Book!');
  });

  it('handles click events', () => {
    render(<Button onClick={onClickMock}>Click me</Button>);

    const button = screen.getByRole('button');
    userEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('disables the button when disabled property is true', () => {
    render(<Button disabled>Click me</Button>);

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });
});
