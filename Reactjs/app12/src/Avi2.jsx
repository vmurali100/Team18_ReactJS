import React from 'react'
import HocComponent from './Avi3'

const clickcounter = ({increment,decrement,reset,count}) => {
  return (
    <div>
      <button onClick={increment}>Increment</button> <br />
      <button onClick={decrement}>Decrement</button> <br />
      <button onClick={reset}>Reset</button> <br />
      <h2>count : {count}</h2> 
    </div>
  )
}

export default HocComponent(clickcounter)