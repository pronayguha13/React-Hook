import React, { useContext } from "react";
import { CounterContext } from "../CounterContext";

function Counter() {
  const { counter, handler } = useContext(CounterContext);
  return (
    <div>
      <div>Count : {counter.count}</div>
      <button onClick={() => handler({ type: "INCREMENT", payload: 1 })}>
        Increment Counter
      </button>
      <button onClick={() => handler({ type: "DECREMENT", payload: 1 })}>
        Decrement Counter
      </button>
      <button onClick={() => handler({ type: "RESET" })}>Reset Counter</button>
    </div>
  );
}

export default Counter;
