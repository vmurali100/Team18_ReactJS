import React, { Component } from 'react'

export default class ImageComp extends Component {
  render() {
    return (
      <div>
        <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000&t=st=1709624552~exp=1709625152~hmac=bd990c45c6e0ad7116c3f32435ae802407beaef71ffc1c5b0a4520bfe0fb4105" alt="" />
      </div>
    )
  }
  componentWillUnmount(){
    console.log("componentWillUnmount Called !!")
  }
}