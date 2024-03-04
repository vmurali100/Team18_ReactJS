import React, { Component } from 'react'

export default class Student2 extends Component {
    constructor(){
        super();
        this.state={
            message:"Hi..Iam from class components",
            User:{},
            Person:[]
        }
    }
    handlechangemessage = () =>{
this.setState({
message:"iam from new class components"
})
    }
    handlechangeobject = ()=>{
        this.setState({
            User:{
                fname:"babu",
                lname:"reddy",
                email:"babu@123"
            }
        })
    }
    handlechangearray = ()=>{
        this.setState({
            Person:[
                "vanitha",
                "mokshith",
                "mokshagna",
                "babu",
                "thulasi"
            ]
        })
    }
  render() {
    return (
      <div>{this.state.message}</div>
    )
  }
}
