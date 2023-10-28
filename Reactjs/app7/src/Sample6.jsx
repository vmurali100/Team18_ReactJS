import { Component } from "react";

export default class Krishna extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      lname: "",
      isEdit: false,
      users: [
        { fname: "John", lname: "Doe" },
        { fname: "Jane", lname: "Smith" },
        { fname: "Alice", lname: "Johnson" },
        { fname: "Bob", lname: "Brown" },
        { fname: "Eva", lname: "Williams" },
      ],
      index: null,
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
    this.setState({ users: newUsers, fname: "", lname: "" });
    console.log(user);
  };

  handleDelete = (usr, i) => {
    // let newUsers = [...this.state.users]
    // newUsers.splice(i,1)

    let newUsers = this.state.users.filter((us) => {
      return us.fname !== usr.fname;
    });

    this.setState({ users: newUsers });
  };
  handleEdit = (usr, i) => {
    this.setState({
      fname: usr.fname,
      lname: usr.lname,
      isEdit: true,
      index: i,
    });
  };

  handleUpdate = () => {
    let newUsers = [...this.state.users];
    let user = {
      fname: this.state.fname,
      lname: this.state.lname,
    };
    newUsers[this.state.index] = { ...user };
    this.setState({ users: newUsers,isEdit:false });
    this.clearForm()
  };

  clearForm=()=>{
    this.setState({fname:"",lname:""})
  }
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
          {this.state.isEdit ? (
            <button type="button" onClick={this.handleUpdate}>
              Update Value
            </button>
          ) : (
            <button type="button" onClick={this.addUser}>
              Get Value
            </button>
          )}
        </form>

        <table border={1}>
          <thead>
            <tr>
              <th>First Name </th>
              <th>Last Name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((usr, i) => {
              return (
                <tr>
                  <td>{usr.fname}</td>
                  <td>{usr.lname}</td>
                  <td>
                    {/* <button onClick={this.handleEdit}>Edit</button> */}
                    <button
                      onClick={() => {
                        this.handleEdit(usr, i);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        this.handleDelete(usr, i);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
