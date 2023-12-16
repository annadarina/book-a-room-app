import React from 'react';
import { render, screen } from '@testing-library/react';
import RoomsList from './index';

describe('RoomsList Component', () => {
  const mockRooms = [
    {
      name: 'Room 1',
      spots: 10,
      thumbnail: 'image1.jpg',
    },
    {
      name: 'Room 2',
      spots: 5,
      thumbnail: 'image2.jpg',
    },
  ];

  it('renders error message when there is an error', () => {
    const errorMessage = 'Error occurred. Please try again later.';
    render(<RoomsList rooms={[]} error={errorMessage} />);

    const errorElement = screen.getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
  });

  it('renders info message when there are no rooms', () => {
    render(<RoomsList rooms={[]} error={null} />);

    const infoMessage = screen.getByText('No data found');
    expect(infoMessage).toBeInTheDocument();
  });

  it('renders room card for each room when there is list data', () => {
    render(<RoomsList rooms={mockRooms} error={null} />);

    const roomCard1 = screen.getByText('Room 1');
    const roomCard2 = screen.getByText('Room 2');

    expect(roomCard1).toBeInTheDocument();
    expect(roomCard2).toBeInTheDocument();
  });
});
