import React, { useReducer, createContext } from "react";
import DecrementButton from "./DecrementButton";
import IncrementButton from "./IncrementButton";
import ResetButton from "./ResetButton";

export const CounterContext = createContext();

const initState = {
  countValue: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { countValue: state.countValue + action.value };
    case "decrement":
      return { countValue: state.countValue - action.value };
    case "reset":
      return { countValue: initState.countValue };
    default:
      return { countValue: state.countValue };
  }
};

const CounterOne = () => {
  const [count, dispatch] = useReducer(reducer, initState);

  return (
    <div>
      <div>Count- {count.countValue}</div>
      <CounterContext.Provider value={{ dispatchCount: dispatch }}>
        <IncrementButton />
        <DecrementButton />
        <ResetButton />
      </CounterContext.Provider>
    </div>
  );
};

export default CounterOne;
