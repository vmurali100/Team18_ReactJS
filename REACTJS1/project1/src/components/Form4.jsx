import React, { useState } from 'react'

export const Form4 = () => {
   const [Pass,setPass]=useState({
    fname:"",
    lname:"",
    email:"",
    password:"",
   })
   const handlechange=(e)=>{
    var inputname=e.target.name;
    var newPass={...Pass};
    newPass[inputname]=e.target.value;
    setPass(newPass)


   }
  return (
    <div>
        <form action="">
            <label htmlFor="">fname:</label>
            <input type="text" name='fname'  value={Pass.fname}  onChange={handlechange}/>
            <label htmlFor="">lname:</label>
            <input type="text" name='lname'  value={Pass.lname} onChange={handlechange}/>
            <label htmlFor="">Email:</label>
            <input type="text" name='email' value={Pass.email}  onChange={handlechange}/>
            <label htmlFor="">password</label>
            <input type="text" name='password' value={Pass.password} onChange={handlechange} />
        </form>
    </div>
  )
}
