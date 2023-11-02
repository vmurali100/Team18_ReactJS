import React, { Component } from 'react'

export default class Warning extends Component {
  render() {
    return (
      <div>
        <h2 style={{color:'red'}}>The Count Value is Less Then 10 : Please Increment the Count </h2>
      </div>
    )
  }
}
