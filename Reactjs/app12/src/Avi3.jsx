import React from "react";
import { useState } from "react";

const HocComponent = (OriginalComp) => {
  const UpdatedComponent = () => {
   const [count,setCount]=useState(0);
   const increment=()=>{setCount(count+1)};
   const decrement=()=>{setCount(count-1)};
   const reset=()=>{setCount(0)}
    return <OriginalComp count={count} increment={increment} decrement={decrement} reset={reset}/>;
  };

  return UpdatedComponent;
};
export default HocComponent;