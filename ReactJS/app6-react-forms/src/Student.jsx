import React, { Component } from "react";
import axios from "axios";

export default class Student extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isEdit:false,
      user:{
        fname:"",
        lname:"",
        email:""
      }
    };
  }

  handleChange=(e)=>{

    let newUser = {...this.state.user}
    newUser[e.target.name] = e.target.value
    this.setState({user:newUser})
  }

  getDataFromServer = () => {
    axios.get("http://localhost:3000/users").then((res) => {
      console.log(res.data);
      this.setState({ users: res.data });
    });
  };

  addUser=()=>{
    console.log(this.state.user)
    axios.post("http://localhost:3000/users",this.state.user).then((res)=>{
        this.getDataFromServer()
        this.clearForm()
    })
  }

  handleEdit=(usr)=>{
    console.log(usr)
    this.setState({user:usr,isEdit:true})
  }

  handleUpdate=()=>{
    axios.put("http://localhost:3000/users/"+this.state.user.id,this.state.user).then((res)=>{
        this.getDataFromServer()
        this.clearForm()
    })
  }
  clearForm=()=>{
    let newUser={
        fname:"",
        lname:"",
        email:""
    }
    this.setState({user:newUser,isEdit:false})
  }

  handleDelete=(usr)=>{
    axios.delete("http://localhost:3000/users/"+usr.id).then((res)=>{
        this.getDataFromServer()
    })
  }

  render() {
    return (
      <div>

        <button onClick={this.getDataFromServer}>Get Data</button>

        <form>
          <label htmlFor="">First Name : </label>
          <input
            type="text"
            name="fname"
            onChange={this.handleChange}
            value={this.state.user.fname}
          />
          <br />
          <label htmlFor="">Last Name : </label>
          <input
            type="text"
            name="lname"
            onChange={this.handleChange}
            value={this.state.user.lname}
          />{" "} <br />
          <label htmlFor="">Email : </label> 
          <input
            type="text"
            name="email"
            onChange={this.handleChange}
            value={this.state.user.email}
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
        <hr />
        <table border={1}>
          <thead>
            <tr>
              <th>First Name </th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Id</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((usr, i) => {
              return (
                <tr key={i}>
                  <td>{usr.fname}</td>
                  <td>{usr.lname}</td>
                  <td>{usr.email}</td>
                  <td>{usr.id}</td>
                  <td>
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
