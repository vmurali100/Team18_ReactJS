import React, { useState } from 'react'

export const Student13 = () => {
    const[random,setrandom] = useState();
    const getrandomnumber = () =>{
        var newrandomnumber=Math.floor(Math.random()*100);
        setrandom(newrandomnumber)
    }
  return (
    <div>
        <h3>{random}</h3>
        <button onClick={getrandomnumber}>click and to get random number</button>
    </div>
  )
}

