import React, { useState } from "react";

export const Form1 = () => {
    const [personaldetails,setpersonaldetails]= useState({
        fname:"",
        lname:"",
       gender:"",
       subjects:[],
     department:"",
    })

    const handleSubmit=()=>{
console.log(personaldetails)
    }
     const handleChange=(e)=>{
        console.log(e.target.name)
        var newpersonaldetails={...personaldetails}
        newpersonaldetails[e.target.name]=e.target.value
        setpersonaldetails(newpersonaldetails)
console.log(e.target.value)
     }
  return (
    <div>
      <form action="">
        <label htmlFor="fname">fname:</label>
        <input type="text" name="fname" value={personaldetails.fname} onChange={handleChange} />
        <br />
        <label htmlFor="lname">lname:</label>
        <input type="text" name="lname" value={personaldetails.lname} onChange={handleChange} />
        <br />
        <label htmlFor="radio">gender</label>
        <input type="radio" name="gender" value="male" /> Male
        <input type="radio" name="gender" value="female" />female <br />
        <label htmlFor="checkbox">subjects</label>
        <input type="checkbox" name="subjects" value="HTML" /> HTML
        <input type="checkbox" name="subjects" value="css" />css <br />
        <input type="checkbox" name="subjects" value="javascript" />javascript <br />
        <input type="checkbox" name="subjects" value="reactjs" />reactjs <br />
        <label htmlFor="select">select options</label>
        <select name="department" id="select options">
          <option value="select options">--select options--</option>
          <option value="css">css</option>
          <option value="ece">ece</option>
          <option value="eee">eee</option>
        </select><br />
        <button type="button" onClick={handleSubmit}>SUBMIT</button>
      </form>
    </div>
  );
};
