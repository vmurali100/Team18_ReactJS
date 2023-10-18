import { Component } from "react";

export default class Student extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello from Class Component !!",
      studentDetails:{
        fname:"Murali",
        lname:"Krishna"
      },
      users:["Ram","Ravi","Sam"]
    };
  }
  render() {
    return (
      <div>
        <h2>Welcome to Class Component !!</h2>
        <h3>{this.state.message}</h3>
        <ul>
            <li>{this.state.studentDetails.fname}</li>
            <li>{this.state.studentDetails.lname}</li>
        </ul>
        <hr />
        <ul>
            {this.state.users.map((usr)=>{
                return <li>{usr}</li>
            })}
        </ul>
      </div>
    );
  }
}
