import React, { useState } from "react";

const HookCounter = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  //set value based on previous state
  const incrementFive = () => {
    // for (let index = 0; index < 5; index++) {
    //   setCount(count + 1);
    // }

    /*
    setCount(count + 1) => is unsafe because it can happen that it is stale
  */
    setCount((prevCount) => prevCount + 5);
  };

  return (
    <div>
      count:{count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={incrementFive}>increment five</button>
    </div>
  );
};

export default HookCounter;
