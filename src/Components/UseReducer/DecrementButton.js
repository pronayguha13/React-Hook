import React, { useContext } from "react";
import { CounterContext } from "./CounterOne";

function DecrementButton() {
  const { dispatchCount } = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => dispatchCount({ type: "decrement", value: 1 })}>
        Decrement
      </button>
    </div>
  );
}

export default DecrementButton;
