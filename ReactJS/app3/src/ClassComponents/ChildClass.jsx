import { Component } from "react";

export class Child extends Component {
  constructor(props) {
    super();
    console.log(props);
  }
  render() {
    return (
      <div>
        <h2>{this.props.message}</h2>
        <ul>
          <li>{this.props.studentDetails.fname}</li>
          <li>{this.props.studentDetails.lname}</li>
        </ul>

        <p>
          <u>Subjects</u>{" "}
        </p>
        <ul>
          {this.props.subjects.map((sub) => {
            return <li>{sub}</li>;
          })}
        </ul>
      </div>
    );
  }
}
