import React, { Component } from 'react'
import axios from 'axios'
export default class Users extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         users:[]
      }
    }
    
    getAllUsers=()=>{
        axios.get("http://www.filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true").then(res=>{
            console.log(res.data)
            this.setState({users:res.data})
        })
    }
  render() {
    return (
      <div>
        <button onClick={this.getAllUsers}>Get All Users</button>
        {/* {this.state.users.length} */}
        {/* <ul>
            
            {this.state.users.map((usr)=>{
               return <li>{usr.username}</li>
            })}
        </ul> */}
        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Username</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {this.state.users.map((usr)=>{
                    return <tr>
                        <td>{usr.id}</td>
                        <td>{usr.username}</td>
                        <td>{usr.email}</td>
                        <td>{usr.password}</td>
                    </tr>
                })}
            </tbody>
        </table>
      </div>
    )
  }
}
