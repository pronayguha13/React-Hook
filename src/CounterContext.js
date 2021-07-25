import React, { createContext, useReducer } from "react";

export const CounterContext = createContext();
export function CounterContextProvider({ children }) {
  //initial state
  const counter = {
    count: 0,
  };

  const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case "INCREMENT":
        return {
          count: state.count + payload,
        };
      case "DECREMENT":
        return {
          count: state.count - payload,
        };
      case "RESET":
        return counter;
      default:
        return { state };
    }
  };

  const [count, dispatch] = useReducer(reducer, counter);

  return (
    <CounterContext.Provider
      value={{
        counter: count,
        handler: dispatch,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
}
