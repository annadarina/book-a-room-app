import React from 'react';
import { useRooms } from 'shared/hooks';

const Rooms = () => {
  const { rooms, isLoading, error } = useRooms();
  console.log(rooms, isLoading, error);
  return <>Rooms</>;
};

export default Rooms;
