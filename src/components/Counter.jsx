import React, { useState, useCallback } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  // Normal function without useCallback
  const incrementNormal = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      console.log("Count after normal increment:", newCount);
      return newCount;
    });
  };

  // Using useCallback to memoize the increment function
  const incrementWithCallback = useCallback(() => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      console.log("Count after useCallback increment:", newCount); // Log the new count value
      return newCount;
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="text-2xl font-semibold mb-4">Count: {count}</p>
        {/* Button for normal increment */}
        <button
          onClick={incrementNormal}
          className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors duration-300 mr-4"
        >
          Increment (Normal)
        </button>

        {/* Button for increment with useCallback */}
        <button
          onClick={incrementWithCallback}
          className="px-4 py-2 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition-colors duration-300"
        >
          Increment (useCallback)
        </button>
      </div>
    </div>
  );
};

export default Counter;