import React from 'react'


const ChildCom = (props) => {
  return (
    <div>
      <h2>Welcome to Child Component</h2>
      <p>Message from Parent : {props.newMsg}</p>

      <button
        onClick={() => {
          props.render("This Message is Being Changed In Parent Compoent !!");
        }}
      >
        Change Message
      </button>
    </div>
  )
}

export default ChildCom