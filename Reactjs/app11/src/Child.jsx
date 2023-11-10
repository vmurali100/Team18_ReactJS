import React from 'react'

export const Child = (props) => {
  return (
    <div>
        <h2> Welcome to the Child component</h2>
        <hr />
        <Users allusers={props.allusers}/>
    </div>
  )
}
