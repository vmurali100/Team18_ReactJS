import React from 'react'
import Child from './Child'

const Parent = (props) => {
  return (
    <div>
      <h2>Welcome to Parent Component </h2>
      <hr />
      <Child allUsers={props.allUsers}/>
    </div>
  )
}

export default Parent
