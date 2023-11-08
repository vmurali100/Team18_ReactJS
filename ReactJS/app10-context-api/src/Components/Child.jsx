import React from 'react'
import Users from './Users'

const Child = (props) => {
  return (
    <div>
      <h2>Welcome to Child Component !!</h2>
      <hr />
      <Users allUsers={props.allUsers}/>
    </div>
  )
}

export default Child
