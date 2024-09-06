import { useState, useCallback } from "react";

// Factorial component to display the factorial result
const Factorial = ({ number, calculateFactorial }) => {
  // Log when the Factorial component re-renders
  console.log("Factorial component re-rendered with number:", number);
  
  return (
    <div>
      Factorial of {number} is: {calculateFactorial(number)}
    </div>
  );
};

const AdvancedExample = () => {
  const [number, setNumber] = useState(5); // Initial number state

  // Memoized factorial calculation using useCallback to prevent re-calculating
  const calculateFactorial = useCallback((n) => {
    console.log(`Calculating factorial of ${n}`); // Log to track when calculation happens
    if (n <= 1) return 1; // Base case for recursion
    return n * calculateFactorial(n - 1); // Recursive call
  }, []);

  return (
    <div>
      {/* Factorial component with memoized factorial function */}
      <Factorial number={number} calculateFactorial={calculateFactorial} />
      
      {/* Button to increase the number */}
      <button onClick={() => {
        console.log("Button clicked, increasing number");
        setNumber((prev) => prev + 1); // Update number and trigger re-render
      }}>
        Increase Number
      </button>
    </div>
  );
};

export default AdvancedExample;