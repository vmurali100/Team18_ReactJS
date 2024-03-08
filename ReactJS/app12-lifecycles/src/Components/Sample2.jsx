import React, { Component } from "react";
import ImageComp from "./Sample1";

export default class Child extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log("constructor is Called !!!");
  }

  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps Called !!!");
    return null;
  }
  render() {
    console.log("Render method is called !!");
    return (
      <div>
        <h2>Value Received From Sample is : {this.props.count}</h2>
        {this.props.count === 0 && <ImageComp/>}
      </div>
    );
  }

  getSnapshotBeforeUpdate(){
    console.log("getSnapshotBeforeUpdate Called !!")
    return null
  }

  componentDidMount(){
    console.log("componentDidMount Called !!")
  }
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate Called !!")
    return true 
  }
  componentDidUpdate(){
    console.log("componentDidUpdate Called !!")
  }
}