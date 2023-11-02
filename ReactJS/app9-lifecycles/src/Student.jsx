import React, { Component } from "react";
import NewStudent from "./NewStudent";
import Warning from "./Warning";

export default class Student extends Component {
  // Life Cycle Phases of a Class Component
  // 1. Mounting Phase // Displaying for the First time Or Rendering For the First Time
  // 2. Updating Phase // Re rendering a Component when a State Value Changes
  // 3. UnMounting Phase // Removing a Component from DOM based on a Condition
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  handleIncrement = () => {
    this.setState({ count: this.state.count + 2 });
  };
  render() {
    console.log("Student Component Rendered --- Parent");
    return (
      <div>
        <button onClick={this.handleIncrement}>Increment Count</button>
        <h2>Count In Student Component is : {this.state.count}</h2>
        <h2>Welcome to Student Component !! - Parent</h2>
        <hr />

        <NewStudent />

        {/* The following Component will display when Count is less than 10  */}

        {this.state.count <= 10 && <Warning />}
      </div>
    );
  }
}
