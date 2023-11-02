import React, { Component } from 'react'

export default class Warning extends Component {

    componentWillUnmount(){
        console.log("I am from componentWillUnmount In Warning Component !!")
    }
  render() {
    return (
      <div>
        <h2 style={{color:'red'}}>I will be Un Mounted When The Count Reach 10 </h2>
      </div>
    )
  }
}
