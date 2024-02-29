import React, { Component } from 'react'

export default class Student9 extends Component {
    constructor(){
        super();
        this.state ={
           person:{
            name:"John Doe",
            email:"JohnDoe@example.com"
           } 
        }
    }
  render() {
    return (
      <div>
        <ul>
        {Object.values(this.state.person).map((val) =>{
            return <li>{val}</li>
        })} 
        </ul><hr/>
       
      </div>
    )
  }
}
