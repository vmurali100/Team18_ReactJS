import React from 'react'
import "./Form1.css"
export const Form1 = () => {
  return (
    <div><h1>personal details</h1>
    <form action="">
        <label htmlFor="name"> Name:</label>
        <input type="text" id="name" /><br />
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" /><br />
        <label htmlFor="emailid">Email id:</label>
        <input type="text" id="emailid" /><br />
        <label htmlFor="radio">Gender</label>
        <input type="radio" id="radio" name='gender' value="male" />Male
        <input type="radio" id="radio" name='gender' value="female" />female <br />
        <label htmlFor="contact">Contact#:</label>
        <input type="text" id="contact" /><br />
        <h2>Educational Qualification</h2>
        <label htmlFor="go">Degree</label>
        <select name="group" id="go">
            <option value="">--select group --</option>
            <option value="bsc">bsc</option>
        <option value="bcom">bcom</option>
         <option value="bbm">bbm</option></select><br />
         <label htmlFor="went">Engeneering</label>
         <select name="selectgroup" id="went" >
            <option value="selectgroup">--select group--</option>
            
            <option value="css">css</option>
            <option value="ecc">ecc</option>
            <option value="eee">eee</option>
         </select>
         <br />
         <label htmlFor="check">hobbies:</label>
         <input type="checkbox" name="interest" id="check" value="pc" />playing chess 
         <input type="checkbox" name="interest" id="check" value="rb" />reading books
         <h3>Address</h3> 
         <textarea name="" id="" cols="30" rows="10"></textarea> <br />
         <label htmlFor="">Attach resume</label>
         <input type="text" placeholder='chooseFile' />No file choosen <br />
         <button>SUBMIT</button>
        

         
        

        

    </form>
    </div>
  )
}
