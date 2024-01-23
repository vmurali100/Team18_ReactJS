import React, { useState } from 'react'

export const Sample2 = () => {
 
    const [myName,setMyName]=useState("mokshith")
  

const changeName =()=> {
    setMyName("mokshagna")
}
return(
    <>
     <button onClick={changeName}>changeName</button>
     <h1> welcome{myName}</h1>
    </>
   
   
    
)
}