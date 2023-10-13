import React from 'react'

const Employee = (props) => {
  console.log(props)
  return (
    <div>
      <h2>Employee Name is : {props.empName} , {props.age},{props.email}</h2>

    </div>
  )
}

export default Employee

