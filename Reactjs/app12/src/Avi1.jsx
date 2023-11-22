import React from 'react'
import HocComponent from './Avi3'

const hovercounter = ({increment,decrement,reset,count}) => {
  
  return (
    <div>
      <button onMouseOver={increment}>Increment </button> <br />
      <button onMouseOver={decrement}>Decrement </button> <br />
      <button onMouseOver={reset}>Reset </button> <br />
      <h2>count :{count}</h2>
    </div>
  )
}

export default HocComponent(hovercounter)