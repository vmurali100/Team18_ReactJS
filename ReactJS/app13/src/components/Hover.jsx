import React from "react"

const Hovercounter  =({
    count,
    increment,
    decrement,reset
}) =>{
    return(
        <div>
            <h2>welcome to clickcounter component :{count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default Hovercounter;