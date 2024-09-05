import React, { useState, useCallback, memo } from 'react';

// Memoized Child component: It only re-renders if its props (onIncrement or label) change
const Child = React.memo(({ onIncrement, label }) => {
  // Log when the child re-renders
  console.log(`${label} re-rendered`);
  return (
    <div className="mt-4">
      <button onClick={onIncrement}>{label}</button>
    </div>
  );
});

const CounterTwo = () => {
  const [count, setCount] = useState(0);

  // Function to increment count - NOT memoized, gets re-created on every re-render
  const incrementNormalTwo = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      console.log("Count after normal increment Two:", newCount); // Log the updated count
      return newCount;
    });
  };

  // Function to increment count - memoized using useCallback, does not change across re-renders
  const incrementWithCallbackTwo = useCallback(() => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      console.log("Count after useCallback increment Two:", newCount); // Log the updated count
      return newCount;
    });
  }, []); // Empty dependency array: function is memoized and will not change on re-renders

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {/* Display the current count */}
        <p className="text-2xl font-semibold mb-4">Count: {count}</p>

        {/* Child component using the normal increment function */}
        <Child onIncrement={incrementNormalTwo} label="Increment (Normal) Two" />

        {/* Child component using the useCallback memoized increment function */}
        <Child onIncrement={incrementWithCallbackTwo} label="Increment (useCallback) Two" />

        {/* Button to force re-render of the parent component (without changing the count) */}
        <button
          onClick={() => setCount(count)} // This re-renders the parent, but does not change the count value
          className="mt-4 px-4 py-2 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition-colors duration-300"
        >
          Force Re-render
        </button>
      </div>
    </div>
  );
};

export default CounterTwo;