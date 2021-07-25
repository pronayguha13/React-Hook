import React from "react";
import { CounterContextProvider } from "./CounterContext";
import Counter from "./CounterWithAllHook/Counter";

const App = () => {
  return (
    <div>
      <CounterContextProvider>
        <Counter />
      </CounterContextProvider>
    </div>
  );
};

export default App;
