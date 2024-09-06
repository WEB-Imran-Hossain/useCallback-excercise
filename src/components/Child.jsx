import React from 'react';

// Define the Child component
const Child = ({ showMessage }) => {
  console.log('Child Component Rendered!');

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold">Child Component</h2>
      <button
        onClick={showMessage}
        className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Show Message
      </button>
    </div>
  );
};

// Wrap Child component with React.memo for memoization
export default React.memo(Child);
