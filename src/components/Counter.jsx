import React, { useState, useCallback } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  // Using useCallback to memoize the increment function
  const increment = useCallback(() => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      console.log("Count after increment:", newCount); // Log the new count value
      return newCount;
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="text-2xl font-semibold mb-4">Count: {count}</p>
        <button
          onClick={increment}
          className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;