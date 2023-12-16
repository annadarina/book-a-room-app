import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RoomCard from './index';

const mockRoom = {
  name: 'Room 1',
  spots: 10,
  thumbnail: 'image.jpg',
};

describe('RoomCard Component', () => {
  it('renders room card with correct content', () => {
    render(<RoomCard room={mockRoom} />);

    expect(screen.getByTestId('card-image')).toBeInTheDocument();
    expect(screen.getByTestId('card-title')).toHaveTextContent('Room 1');
    expect(screen.getByText('10 spots remaining')).toBeInTheDocument();
    expect(screen.getByTestId('card-button')).toBeInTheDocument();
  });

  it('handles room booking correctly', async () => {
    render(<RoomCard room={mockRoom} />);

    fireEvent.click(screen.getByTestId('card-button'));

    expect(screen.getByText(`9 spots remaining`)).toBeInTheDocument();

    setTimeout(() => {
      expect(
        screen.getByText('🥳 You successfully booked Room 1 room')
      ).toBeInTheDocument();
    }, 500);
  });

  it('renders correct text if spot count is 1', () => {
    render(<RoomCard room={{ ...mockRoom, spots: 1 }} />);

    expect(screen.getByText(`1 spot remaining`)).toBeInTheDocument();
  });

  it('disables button when spot count is 0', () => {
    render(<RoomCard room={{ ...mockRoom, spots: 0 }} />);

    const button = screen.getByTestId('card-button');

    expect(button).toBeDisabled();
  });
});
