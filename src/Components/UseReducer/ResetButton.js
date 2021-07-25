import React, { useContext } from "react";
import { CounterContext } from "./CounterOne";

function RestButton() {
  const { dispatchCount } = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => dispatchCount({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default RestButton;
