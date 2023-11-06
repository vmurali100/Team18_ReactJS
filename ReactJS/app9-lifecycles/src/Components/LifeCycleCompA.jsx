import React, { Component } from "react";
import LifeCycleCompB from "./LifeCycleCompB";
import Warning from "./Warning";

export default class LifeCycleCompA extends Component {
  handleIncrement = () => {
    this.setState({ count: this.state.count + 2 });
  };
  componentDidMount() {
    console.log(
      "I am from componentDidMount In LifeCycleCompA!! - I will Be Running Fourth or Last *** "
    );
  }

  render() {
    console.log("I am Rendering Method In LifeCycleCompA !! - I will Be Running Third ");
    return (
      <div>
        <h2>Welcome to Lifecycle A </h2>
        <button onClick={this.handleIncrement}>Increment</button>
        <h2>Count is : {this.state.count}</h2>

        <hr />

        <LifeCycleCompB count={this.state.count}/>

        <hr />

        {this.state.count <= 10 && <Warning/>}
      </div>
    );
  }

  static getDerivedStateFromProps() {
    console.log(
      "I am from getDerivedStateFromProps In LifeCycleCompA- I will Be Running Second "
    );
  }

  constructor(props) {
    console.log("I am Constructor Method In LifeCycleCompA - I will be running First !!");
    super(props);
    this.state = {
      count: 0,
    };
  }
}
