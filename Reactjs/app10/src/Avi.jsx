import React, { Component } from 'react'
import axios from 'axios'
export default class Aria extends Component {
    constructor(props) {
      super(props) 
      this.state = {
         aria:[]
      }
    }  
    getAllUsers=()=>{
        axios.get("https://random-data-api.com/api/v2/users?size=10").then(result=>{
            console.log(result.data)
            this.setState({aria:result.data})
        })
    }
  render() {
    return (
      <div id="pen">
        <button onClick={this.getAllUsers} id="btn">Show Data</button> <br /><br />
        <table border={2}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>UserName</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Password</th>
                    <th>Gender</th>
                    <th>Avatar</th>
                    <th>Date of birth</th>
                    <th>uid</th>
                    <th>Social Insurance Number</th>
                </tr>
            </thead>
            <tbody>
                {this.state.aria.map((usr)=>{
                    return <tr>
                        <td>{usr.id}</td>
                        <td>{usr.username}</td>
                        <td>{usr.first_name}</td>
                        <td>{usr.last_name}</td>
                        <td>{usr.email}</td>
                        <td>{usr.phone_number}</td>
                        <td>{usr.password}</td>
                        <td>{usr.gender}</td>
                        <td>{usr.avatar}</td>
                        <td>{usr.date_of_birth}</td>    
                        <td>{usr.uid}</td> 
                        <td>{usr.social_insurance_number}</td>               
                        </tr>
                })}
            </tbody>
        </table>
      </div>
    )
  }
}