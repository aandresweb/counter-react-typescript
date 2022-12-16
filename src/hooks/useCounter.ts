import React, { useState } from "react";

export default function useCounter(initialCounter: number) {
  const [counter, setCounter] = useState(initialCounter);

  const incrementCounter = (incrementNumber?: number): void => {
    let incrementTotal = incrementNumber ? incrementNumber : 1;

    setCounter(counter + incrementTotal);
  };

  const decrementCounter = (decrementNumber?: number): void => {
    let decrementTotal = decrementNumber ? decrementNumber : 1;

    setCounter(counter - decrementTotal);
  };

  const restartCounter = (): void => {
    setCounter(initialCounter);
  };

  return {
    counter,
    incrementCounter,
    decrementCounter,
    restartCounter,
  };
}
