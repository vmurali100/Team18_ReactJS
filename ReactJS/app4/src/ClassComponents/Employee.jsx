import { Component } from "react";
import EmployeeObj from "./EmployeeObj";
import MessageComp from "./Message";

export default class Employee extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
      employee: {},
      technologies: [],
    };
  }
  showMessage = () => {
    this.setState({ message: "Welcome to Employee Component !!" });
  };

  showEmployeeDetails = () => {
    this.setState({
      employee: {
        fname: "Ram",
        lname: "Krishna",
      },
    });
  };

  showTechnologies=()=>{
    this.setState({
        technologies:["HTML","CSS","JS","Angular","ReactJS"]
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.showMessage}>Show Employee Message</button>
        {/* <h2>{this.state.message}</h2> */}
        <MessageComp msg={this.state.message}/>
        <hr />
        <button onClick={this.showEmployeeDetails}>
          Show Employee Details
        </button>
        <EmployeeObj employee={this.state.employee}/>
        {/* <ul>
          <li>{this.state.employee.fname}</li>
          <li>{this.state.employee.lname}</li>
        </ul> */}
        <hr />
        <button onClick={this.showTechnologies}>Show Technologies</button>
        <ul>
            {this.state.technologies.map((tech)=>{
                return <li>{tech}</li>
            })}
        </ul>
      </div>
    );
  }
}
