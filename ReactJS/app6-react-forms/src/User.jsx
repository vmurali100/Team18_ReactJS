import { Component } from "react";

export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      lname: "",
    };
  }

  handleChange = (e) => {
    console.log(e.target.name)
    let proName = e.target.name
    this.setState({[proName]:e.target.value})
  };

  addUser=()=>{
   let user={
    fname:this.state.fname,
    lname:this.state.lname
   }
   console.log(user)
  }

  render() {
    return (
      <form>
        <label htmlFor="">First Name : </label>
        <input
          type="text"
          name="fname"
          onChange={this.handleChange}
          value={this.state.fname}
        />
        <br />
        <label htmlFor="">Last Name : </label>
        <input
          type="text"
          name="lname"
          onChange={this.handleChange}
          value={this.state.lname}
        />{" "}
        <br />
        <button type="button" onClick={this.addUser}>Get Value</button>
      </form>
    );
  }
}
