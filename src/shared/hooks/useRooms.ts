import { useState, useEffect } from 'react';
import { Room } from '../types';

const BASE_URL = 'https://wetransfer.github.io/rooms.json';

// Custom hook for fetching and managing rooms data
export const useRooms = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch rooms list and handle error and loading states
  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setRooms(data.rooms);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setRooms([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { rooms, isLoading, error };
};
