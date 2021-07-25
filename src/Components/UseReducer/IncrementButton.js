import React, { useContext } from "react";
import { CounterContext } from "./CounterOne";

function IncrementButton() {
  const { dispatchCount } = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => dispatchCount({ type: "increment", value: 1 })}>
        Increment
      </button>
    </div>
  );
}

export default IncrementButton;
