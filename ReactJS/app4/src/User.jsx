import React, { useState } from 'react'

export default function User(){
    const[message,setmessage]=useState("welcome to reactjs")
    const[Person,setPerson]=useState({
        name:"vanitha",
        lname:"reddy",
        phno:123456,
        email:"vanitha@123"
    })
    const[Students,setStudent]=useState([
        "vanitha",
        "haritha",
        "mokshith",
        "babu"
    ])

  return (
<div>
<h2>{message}</h2>
<hr/>
<ul>
    {Object.values(Person).map((val) =>{
        return<li>{val}</li>
    })}
</ul>
<hr/>
<ul>
    {Students.map((Student) =>{
       return <li>{Student}</li>
    })}
</ul>
</div>
  )
}

    

