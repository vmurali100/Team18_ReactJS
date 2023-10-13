import React from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import { useState } from "react";

const Demo = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const increamentOne = () => {
    setCounterOne(counterOne + 1);
  };

  const increamentTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  //   const isEven = useMemo(() => {
  // let i = 0;
  // while (i < 2000000000) {
  //   i++;
  // }
  // return counterOne % 2 === 0;
  //   }, [counterOne]);

  const isEven = useCallback(() => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <h2>Welcome to Demo Component !!</h2>

      <button onClick={increamentOne}>Counter One - {counterOne}</button>
      <span>{isEven() ? "Even" : "Odd"}</span>
      <br />

      <button onClick={increamentTwo}>Counter Two - {counterTwo}</button>
    </div>
  );
};

export default Demo;
