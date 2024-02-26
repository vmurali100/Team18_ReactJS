import React, { Component } from 'react'

export default class Student2 extends Component {
    constructor(){
        super();
        this.state ={
            message:"Hi,iam from class component",
            Person:{},
            User:[]
        }

        
     };
     handlechangemessage = () =>{
        this.setState({
            message:"I am from new class component"   
        })
     }
     handlechangeobject = ()=>{
        this.setState({
            Person: {
                fname:"vanitha",
                lname:"reddy"
            }
        })
     }
     handlechangearray = ()=>{
        this.setState({
            User:[
                "mokshith",
                "mokshagna"
            ]
        })
     }
  render() {
    return (
      <div>Student2</div>
    )
  }
}
