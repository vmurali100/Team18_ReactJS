import React, { useState } from 'react'
import "./Form1.css"
export const Form1 = () => {
  var [studentdetails,setstudentdetails]=useState({
    name:"shanthi",
    password:768688,
    emailid:"HHhkhdhkjsah@gmail.com",
    gender:"female",
    contact:"assDSDX",
    degree:"bsc",
    engineering:"csc",
    hobbies:"rb",
    })
   const adduser =()=>{
console.log(studentdetails)

   }

  
  return (
    <div><h1>personal details</h1>
    <form action="">
        <label htmlFor="name"> Name:</label>
        <input type="text" id="name" value={studentdetails.name}/><br />
        <label htmlFor="password">Password:</label>
        <input type="text" id="password"  value={studentdetails.password}/><br />
        <label htmlFor="emailid">Email id:</label>
        <input type="text" id="emailid"  value={studentdetails.emailid}/><br />
        <label htmlFor="radio">Gender</label>
        <input type="radio" id="radio" name='gender' value="male" checked={studentdetails.gender=="male"}/> Male
        <input type="radio" id="radio" name='gender' value="female" checked={studentdetails.gender=="female"}/>female <br />
        <label htmlFor="contact">Contact#:</label>
        <input type="text" id="contact"  value={studentdetails.contact}/><br />
        <h2>Educational Qualification</h2>
        <label htmlFor="go">Degree</label>
        <select name="group" id="go" value={studentdetails.group}>
            <option value="">--select group --</option>
            <option value="bsc">bsc</option>
        <option value="bcom">bcom</option>
         <option value="bbm">bbm</option></select><br />
         <label htmlFor="went">Engeneering</label>
         <select name="selectgroup" id="went"  value={studentdetails.selectgroup}>
            <option value="selectgroup">--select group--</option>
            
            <option value="css">css</option>
            <option value="ecc">ecc</option>
            <option value="eee">eee</option>
         </select>
         <br />
         <label htmlFor="check">hobbies:</label>
         <input type="checkbox" name="interest" id="check" value="pc" checked={studentdetails.interest=="pc"}/>playing chess 
         <input type="checkbox" name="interest" id="check" value="rb"  checked={studentdetails.interest=="rb"}/>reading books
         <h3>Address</h3> 
         <textarea name="" id="" cols="30" rows="10"></textarea> <br />
         <label htmlFor="">Attach resume</label>
         <input type="text" placeholder='chooseFile' />No file choosen <br />
         <button type='button' onClick={adduser}>SUBMIT</button>
        

         
        

        

    </form>
    </div>
  )
}
