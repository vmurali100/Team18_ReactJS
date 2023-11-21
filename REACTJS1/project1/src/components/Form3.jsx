import React, { useState } from 'react'

export const Form3 = () => {
  const [Name, setname] =useState({
    fname:"",
    lname:"",
  })
  const handleChange=(e)=>{
var inputname=e.target.name;
var newName={...Name};
newName[inputname]=e.target.value;
setname(newName);
}


  }

  return (
    <div>
      <form action="">
        <label htmlFor="">fname:</label>
        <input type="text" name='fname' value={Name.fname} onChange={handleChange} /><br />
        <label htmlFor="">lname:</label>
        <input type="text" name='lname' value={Name.lname} onChange={handleChange} /><br />
        <button type='button'>Submit</button>
      </form>
    </div>
  )

