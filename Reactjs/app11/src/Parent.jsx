import React from 'react'

export const Parent = (props) => {
  return (
    <div>
        <h2>Welcome to the parent component</h2>
        <br />
        <Child allusers={props.allusers}/>
    </div>
  )
}
