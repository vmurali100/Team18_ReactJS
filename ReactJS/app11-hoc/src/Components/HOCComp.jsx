import React from "react";
import { useState } from "react";

const HOCComp = (OriginalComp) => {
  const EnhancedComponent = () => {
   const [count,setCount]=useState(0);

   const incrementCount=()=>{
    setCount(count+1)
   };
   const decrementCount=()=>{
    setCount(count-1)

   };
   const resetCount=()=>{

    setCount(0)

   }
    return <OriginalComp count={count} incrementCount={incrementCount} decrementCount={decrementCount}resetCount={resetCount}/>;
  };

  return EnhancedComponent;
};

export default HOCComp;

// import React, { useState } from 'react';

// const HOCComp = (WrappedComponent) => {
//   // You can use hooks and other functional component features here
//   const EnhancedComponent = (props) => {
//     const [count,setCount] = useState(0)
//     // Add additional logic or state here
//     const incrementCount=()=>{
//       setCount(count+1)
//     };
//     const decrementCount=()=>{
//       setCount(count-1)

//     };
//     const resetCount=()=>{
//       setCount(0)

//     };
//     return <WrappedComponent {...props} resetCount={resetCount} decrementCount={decrementCount} count={count} setCount={setCount} incrementCount={incrementCount}/>;
//   };

//   return EnhancedComponent;
// };

// export default HOCComp
