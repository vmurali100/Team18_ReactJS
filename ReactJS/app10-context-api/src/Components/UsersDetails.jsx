import React from 'react'
import MyContext from './MyContext'

const UsersDetails = (props) => {
  return (
    <div>
      <h2>Welcome to Users Details Component !!</h2>
      <ul>
        {props.allUsers.map((usr)=>{
          return <li>{usr}</li>
        })}
      </ul>

      <hr />
      <MyContext.Consumer>
        {(employees)=>{
          console.log(employees)
         return <ul>
          {employees.map((emp)=>{
            return <li>{emp.name}</li>
          })}
         </ul>
        }}
      </MyContext.Consumer>
    </div>
  )
}

export default UsersDetails
