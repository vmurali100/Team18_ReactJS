import React, { Component } from 'react'

export default class Student5 extends Component {
    constructor(){
        super();
        this.state ={
          message:"Hello World iam from class component"
        }
    }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2><hr/>
      </div>
    )
  }
}
