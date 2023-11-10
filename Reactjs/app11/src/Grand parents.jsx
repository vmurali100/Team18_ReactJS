import React, { useState } from 'react'
import { Parent } from './Parent'

export const Grandparents = () => {
    const [allusers,setallusers]=useState(["ram","ravi","methan","ayush","arman"])

    const[employees,allemployees]=useState([
        {
            id:1,
            name:"siva",
            position:"recruiter",
            department:"Engineering",
            salary:80000,
        },
        {
            id:2,
            name:"ramya",
            position:"software",
            department:"IT",
            salary:50000,
        },
        {
            id:3,
            name:"Praveev",
            position:"software",
            department:"IT",
            salary:45000,
        },
        {
            id:4,
            name:"Samreen",
            position:"software",
            department:"IT",
            salary:30000,
        },    
    ])
  return (
    <div>
        <MyContext.Provider values={employees}>
            <h2>Welcome to the GrandParent Component</h2>
            <hr />
        </MyContext.Provider>
        <Parent allusers={allusers}/>
    </div>
  )
}
