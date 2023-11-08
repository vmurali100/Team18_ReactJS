import React from 'react'
import UsersDetails from './UsersDetails'

const Users = (props) => {
  return (
    <div>
    <h2>Welcome to Users Component</h2>
    <hr />
    <UsersDetails allUsers={props.allUsers}/>
    </div>
  )
}

export default Users
