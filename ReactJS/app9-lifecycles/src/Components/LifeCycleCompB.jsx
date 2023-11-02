import React, { Component } from "react";

export default class LifeCycleCompB extends Component {
  constructor(props) {
    console.log("I am constructor Method In LifeCycle B Compoent ");
    super(props);
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      "I am getDerivedStateFromProps Method In LifeCycle B Compoent "
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("I am shouldComponentUpdate Method In LifeCycle B Compoent ");
    return true
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("I am getSnapshotBeforeUpdate Method In LifeCycle B Compoent ");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("I am componentDidUpdate Method In LifeCycle B Compoent ");
  }
  render() {
    console.log("I am Rendering Method In LifeCycle B Compoent ");

    return (
      <div>
        <h2>Welcome to LifeCycle B Component !!</h2>
      </div>
    );
  }
}
