import React, { useState, useEffect } from "react";

const IntervalCounter = () => {
  const [count, setCount] = useState(0);

  const tick = () => {
    //put count in the dep array for setCount(count+1)
    setCount((prevCount) => prevCount + 1);
  };

  const doSomething = () => {
    console.log("SomeProp");
  };

  useEffect(() => {
    doSomething(); //Add all the dependencies of function in dep array
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>{count}</div>;
};

export default IntervalCounter;
