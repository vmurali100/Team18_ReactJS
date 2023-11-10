import React from 'react'

function UsersDetails() {
  return (
    <div>UsersDetails
      <mycontext.Consumer>
        {(employee)=>{
          console.log(employee)
        }}
      </mycontext.Consumer>
    </div>
  )
}

export default UsersDetails