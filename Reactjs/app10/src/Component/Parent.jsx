import React from "react";
import React, { useState } from 'react'
import mycontext from "mycontext"
import Chaild from '../../Component/Chaild';

function Parent() {
  const [employee,setemployee]=useState([  {
    id: 3,
    name: "Michael Johnson",
    position: "Financial Analyst",
    department: "Finance",
    salary: 70000,
  },
  {
    id: 4,
    name: "Emily Davis",
    position: "Human Resources Specialist",
    department: "Human Resources",
    salary: 65000,
  },
  {
    id: 5,
    name: "Robert Brown",
    position: "Sales Representative",
    department: "Sales",
    salary: 60000,
  },])
  return (
    <div>
      {/* <mycontext.Provider value={employee}>
      Parent
<Chaild/>
      </mycontext.Provider> */}
      Parent
    </div>
  )
}

export default Parent