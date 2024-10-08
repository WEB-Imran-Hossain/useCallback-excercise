import React, { useState, useCallback } from 'react';
import Child from './Child';

const Parent = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  // Using useCallback to memoize the function
  const showMessage = useCallback(() => {
    console.log('Message from Child:', message);
  }, [message]); // Dependency: function only changes if 'message' changes

  return (
    <div className="p-10 shadow-lg bg-gray-100 border rounded-lg">
      <h1 className="text-xl font-bold">Parent Component</h1>
      <p className="mb-4">Count: {count}</p>

      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Increment Count
      </button>

      <input
        type="text"
        placeholder="Enter a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="mt-4 p-2 border rounded"
      />

      {/* Passing the memoized function as a prop to the child */}
      <Child showMessage={showMessage} />
    </div>
  );
};

export default Parent;