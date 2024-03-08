import React, { Component } from "react";
import Child from "./Sample2";


export default class Sample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    console.log("constructor method Called !!! in Sample");
  }

  componentDidMount() {
    console.log("componentDidMount Called !!! in Sample");
  }

  handleCount = () => {
    this.setState({ count: this.state.count+10 });
  };

  render() {
    console.log(" Render Method is called !!! in Sample");
    return (
      <div>
        <h2>Welcome to Sample Component !!</h2>
        <button onClick={this.handleCount}>Change Count</button>
        <hr />
        <Child count={this.state.count} />
      </div>
    );
  }

  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps Called !!! in Sample");
    return null;
  }
}
