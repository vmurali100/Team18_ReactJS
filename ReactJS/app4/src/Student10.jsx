import React, { useState } from 'react'

export const Student10 = () => {
    const[message,setmessage] = useState("Hi..Iam from Functional component")
    const[object,setobject] = useState({
        name:"vanitha",
        lname:"reddy",
        email:"vanitha@123",
        state:"Ap"
    })
    const[array,setarry] = useState([
        "vanitha",
        "babu",
        "mokshith",
        "mokshagna",
        "thulasi"
    ])
     const changename =()=>{
        setmessage("Hi...Iam from new functional component")
    }
     const changeobject = () =>{
    setobject({
        name:"vanithareddy",
        lname:"reddyreddy",
        email:"vanitha@12311345554",
        state:"Ap"
    })
    }
     const changearray =()=>{
        "vanithareddy",
        "babureddy",
        "mokshithreddy",
        "mokshagnareddy",
        "thulasiramreddy"
    }
  return (
    <div>
        <button onClick={changename}>changemessage</button>
        <h2>{message}</h2>
        <button onClick={changeobject}>changeobject</button>
        <ul>
            {object.values(object).map((val)=>{
                <li>{val}</li>
            })}
        </ul>
        <ul>
        <button onClick={changearray}>changearray</button>
            {array.map((val)=>{
                <li>{val}</li>
            })}
        </ul>
    </div>
  )
}
