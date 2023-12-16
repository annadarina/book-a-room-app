import React from 'react';
import { Room } from '../../types';
import RoomCard from '../RoomCard';
import Placeholder from '../Placeholder';

interface RoomsListProps {
  rooms: Room[];
  error: string | null;
}

const RoomsList = ({ rooms, error }: RoomsListProps) => {
  if (error) {
    return (
      <div className="flex items-center justify-center">
        <Placeholder variant="error" message={error} />
      </div>
    );
  }

  if (!rooms.length) {
    return (
      <div className="flex items-center justify-center">
        <Placeholder variant="info" message="No data found" />
      </div>
    );
  }

  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
      {rooms.map((room) => (
        <RoomCard key={room.name} room={room} />
      ))}
    </div>
  );
};

export default RoomsList;
