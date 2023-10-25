import { Component } from "react";

export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      lname: "",
      users: [],
    };
  }

  handleChange = (e) => {
    console.log(e.target.name);
    let proName = e.target.name;
    this.setState({ [proName]: e.target.value });
  };

  addUser = () => {
    let user = {
      fname: this.state.fname,
      lname: this.state.lname,
    };
    let newUsers = [...this.state.users];
    newUsers.push(user);
    this.setState({users:newUsers,fname:"",lname:""})
    console.log(user);
  };

  render() {
    return (
      <div>
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
          <button type="button" onClick={this.addUser}>
            Get Value
          </button>
        </form>

        <table border={1}>
          <thead>
            <tr>
              <th>First Name </th>
              <th>Last  Name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((usr)=>{
              return <tr>
                <td>{usr.fname}</td>
                <td>{usr.lname}</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
