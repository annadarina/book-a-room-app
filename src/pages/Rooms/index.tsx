import React from 'react';
import Loader from 'shared/components/Loader';
import RoomsList from 'shared/components/RoomsList';
import { useRooms } from 'shared/hooks';

const Rooms = () => {
  const { rooms, isLoading, error } = useRooms();

  return (
    <div className="flex flex-col">
      <div className="mb-3 md:mb-[2.4rem]">
        <h1 className="text-black text-4xl heading-1 mb-1">Rooms</h1>
        <p className="text-secondary text-md lg:text-xl lg:w-5/12 w-full">
          Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor
          ultricies donec risus sodales. Tempus quis et.
        </p>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <RoomsList rooms={rooms} error={error} />
      )}
    </div>
  );
};

export default Rooms;
