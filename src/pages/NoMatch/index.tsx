import React from 'react';

const NoMatch = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Page not found
        </h2>
        <p className="text-gray-600">
          Oops! It seems like the page does not exist.
        </p>
      </div>
    </div>
  );
};

export default NoMatch;
