import React from 'react';

interface PlaceholderProps {
  message: string;
  variant?: 'info' | 'warning' | 'error' | 'success' | 'default';
}

const variantClasses = {
  info: 'bg-blue-100 text-blue-800',
  warning: 'bg-yellow-100 text-yellow-800',
  error: 'bg-red-100 text-red-800',
  success: 'bg-green-100 text-green-800',
  default: 'bg-gray-100 text-gray-800',
};

const Placeholder = ({ message, variant = 'default' }: PlaceholderProps) => {
  return (
    <div
      className={`flex w-full justify-center items-center p-4 rounded-md ${variantClasses[variant]}`}
    >
      <p>{message}</p>
    </div>
  );
};

export default Placeholder;
