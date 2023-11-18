import React from 'react'
import { useState } from 'react'
import HOCComp from './HOCComp'

const HoverCounter = ({decrementCount,incrementCount,resetCount,count}) => {
  
  return (
    <div>
      <button onMouseOver={incrementCount}>Increment Count</button> <br />
      <button onMouseOver={decrementCount}>Decrement Count</button> <br />
      <button onMouseOver={resetCount}>Reset Count</button> <br />

      <h2>Count Value is : {count}</h2>
    </div>
  )
}

export default HOCComp(HoverCounter)
