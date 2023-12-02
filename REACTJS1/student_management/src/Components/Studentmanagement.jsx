import React, { useState } from 'react'

export const Studentmanagement = () => {

    var [studentDetails,setStudentDetails]=useState({
        studentName:"",
        telugu:"",
        hindi:"",
        english:"",
        maths:"",
        science:"",
        social:"",
    })
    const handlechange=(e)=>{
let newstudent={...studentDetails}
newstudent[e.target.name]=e.target.value
setStudentDetails(newstudent)
    }
    var submitData=()=>{
        console.log('called.......')
        
    }
    
  return (
    <div>
        
        <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Student Name</label>
    <input type="text" className="form-control" name='studentName' value={studentDetails.studentName} onChange={(e)=>{handlechange(e)}}/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Telugu</label>
    <input type="number" className="form-control" name='telugu' value={studentDetails.telugu}  onChange={(e)=>{handlechange(e)}}/>
    <label htmlFor="exampleInputPassword1" className="form-label">Hindi</label>
    <input type="number" className="form-control" name="hindi" value={studentDetails.hindi} onChange={(e)=>{handlechange(e)}} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">English</label>
    <input type="number" className="form-control" name='english' value={studentDetails.english} onChange={(e)=>{handlechange(e)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Maths</label>
    <input type="number" className="form-control"name='maths' value={studentDetails.maths} onChange={(e)=>{handlechange(e)}}/>

  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Science</label>
    <input type="number" className="form-control" name='science' value={studentDetails.science} onChange={(e)=>{handlechange(e)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Social</label>
    <input type="number" className="form-control" name='social' value={studentDetails.social} onChange={(e)=>{handlechange(e)}}/>
  </div>
  
  
  <button type="button" className="btn btn-primary" onClick={submitData}>Submit</button>
</form>
    </div>
  )
}
