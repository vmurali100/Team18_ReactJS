import React from 'react'
import HOCComp from './HOCComp'

const ClickCounter = ({decrementCount,incrementCount,resetCount,count}) => {
  return (
    <div>
      <button onClick={incrementCount}>Increment Count</button> <br />
      <button onClick={decrementCount}>Decrement Count</button> <br />
      <button onClick={resetCount}>Reset Count</button> <br />

      <h2>Count Value is : {count}</h2> 
    </div>
  )
}

export default HOCComp(ClickCounter)
