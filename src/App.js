import React, { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrementCounter = () => {
    setCounter((prevCounter) => Math.max(prevCounter - 1, 0));
  };

  return (
    <div>
      <Display count={counter} />
      <Controls onIncrement={incrementCounter} onDecrement={decrementCounter} />
    </div>
  );
}

function Display({ count }) {
  return <div>You clicked {count} times</div>;
}

function Controls({ onIncrement, onDecrement }) {
  return (
    <>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </>
  );
}