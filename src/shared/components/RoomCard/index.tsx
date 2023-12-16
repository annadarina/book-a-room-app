import React, { useState } from 'react';
import { Room } from '../../types';
import Image from '../Image';
import Button from '../Button';
import toast from 'react-hot-toast';

interface RoomCardProps {
  room: Room;
}

const RoomCard = ({ room }: RoomCardProps) => {
  const [count, setCount] = useState(room.spots);

  const spotsMessage = `${count} ${count === 1 ? 'spot' : 'spots'} remaining`;

  // For demo purposes only!
  // Simulate action of booking a room
  const handleClick = () => {
    setCount((prev) => prev - 1);
    toast.success(`🥳 You successfully booked ${room.name} room`);
  };

  return (
    <div>
      <div className="relative w-full h-[13.8rem] mb-3">
        <Image
          src={room.thumbnail}
          alt={room.name}
          title={room.name}
          className="absolute h-full w-full object-cover rounded-[1rem]"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-start justify-start sm:justify-between">
        <div className="pb-2 sm:pr-1 sm:pb-0">
          <h2 className="text-[1.1rem] font-bold">{room.name}</h2>
          <p className="text-primary text-[1.1rem]">{spotsMessage}</p>
        </div>

        <Button disabled={count === 0} onClick={handleClick}>
          Book!
        </Button>
      </div>
    </div>
  );
};

export default RoomCard;
