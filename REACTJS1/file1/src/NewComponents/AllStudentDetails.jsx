import React, { useState } from 'react'
import { DisplayDetails } from './DisplayDetails';

export const AllStudentDetails = () => {
    const [message,setMessage] = useState('Welcome to ReactJS ');
    const [userDetails,setUserDetails]=useState({
        fname:"Murali",
        lname:"Krishna"
    })
    const [subjects,setAllSubjects] = useState(["HTML","CSS","JS","ReactJS"])
  return (
    <div>
        <p>{message}</p>

        {/* <ul>
            <li>{userDetails.fname}</li>
            <li>{userDetails.lname}</li>
        </ul> */}

        <DisplayDetails subjectDetails={subjects} some='' random=''/>

        <ul>
            {/* <li>{subjects[0]}</li> */}
            {subjects.map((val)=>{
                return <li>{val}</li>
            })}
        </ul>
    </div>
  )
}
