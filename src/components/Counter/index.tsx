import React, { useState } from "react";
import useCounter from "../../hooks/useCounter";

export default function Counter() {
  const [incrementQuantity, setIncrementQuantity] = useState<number>(1);
  const [decrementQuantity, setDecrementQuantity] = useState<number>(1);

  const { counter, incrementCounter, decrementCounter, restartCounter } =
    useCounter(0);

  const handleChangeIncrementQuantity = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIncrementQuantity(parseInt(e.target.value));
  };

  const handleChangeDecrementQuantity = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDecrementQuantity(parseInt(e.target.value));
  };

  return (
    <div>
      <p>Counter: {counter}</p>
      <div className="actionGroup">
        <input
          type="number"
          value={incrementQuantity}
          onChange={handleChangeIncrementQuantity}
          min={0}
        />
        <button onClick={() => incrementCounter(incrementQuantity)}>
          Increment counter
        </button>
      </div>
      <div className="actionGroup">
        <input type="number" onChange={handleChangeDecrementQuantity} min={0} />
        <button onClick={() => decrementCounter(decrementQuantity)}>
          Decrement counter
        </button>
      </div>
      <div className="actionGroup">
        <button onClick={restartCounter}>Restart counter</button>
      </div>
    </div>
  );
}
