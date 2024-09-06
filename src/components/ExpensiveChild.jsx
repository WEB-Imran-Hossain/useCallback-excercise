import React, { useState, useCallback } from 'react';

const ExpensiveChild = React.memo(({ onCalculate }) => {
  console.log('ExpensiveChild re-rendered');
  return <button onClick={onCalculate}>Calculate</button>;
});

const Parent = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const calculateResult = useCallback(() => {
    // Simulating an expensive calculation
    setResult(input.length * 1000);
  }, [input]);

  return (
    <div>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Type something" 
      />
      <ExpensiveChild onCalculate={calculateResult} />
      {result && <p>Result: {result}</p>}
    </div>
  );
};

export default Parent;