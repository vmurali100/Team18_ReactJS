import React, { Component } from "react";
import axios from "axios";

export default class Avi3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isEdit: false,
            user: {
                name: "",
                pass: "",
                mail: "",
                gender: "",
                cno: "",
                deg: "",
                eng: "",
                hob: "",
                add: ""
            }
        };
    }

    changing = (e) => {
        let newUser = { ...this.state.user }
        newUser[e.target.name] = e.target.value
        this.setState({ user: newUser })
    }

    getDataFromServer = () => {
        axios.get("http://localhost:3000/users").then((res) => {
            console.log(res.data);
            this.setState({ users: res.data });
        });
    };

    adduser = () => {
        console.log(this.state.user)
        axios.post("http://localhost:3000/users", this.state.user).then((res) => {
            this.getDataFromServer()
            this.clearForm()
        })
    }

    handleEdit = (usr) => {
        console.log(usr)
        this.setState({ user: usr, isEdit: true })
    }

    updateuser = () => {
        axios.put("http://localhost:3000/users/" + this.state.user.id, this.state.user).then((res) => {
            this.getDataFromServer()
            this.clearForm()
        })
    }
    clearForm = () => {
        let newUser = {
            name: "",
            pass: "",
            mail: "",
            gender: "",
            cno: "",
            deg: "",
            eng: "",
            hob: "",
            add: ""
        }
        this.setState({ user: newUser, isEdit: false })
    }

    handleDelete = (usr) => {
        axios.delete("http://localhost:3000/users/" + usr.id).then((res) => {
            this.getDataFromServer()
        })
    }

    render() {
        return (
            <div id="inki">
                <form>
                <h3>Personal Details</h3>
                <label htmlFor="" class="ink">Name : </label>
                <input 
                type="text" 
                name="name" 
                value={this.state.user.name} 
                onChange={this.changing}/><br />
                <label htmlFor="" class="ink">Password : </label>
                <input 
                type="text" 
                name="pass" 
                value={this.state.user.pass} 
                onChange={this.changing}/><br />
                <label htmlFor="" class="ink">Email-id : </label>
                <input 
                type="text" 
                name="mail" 
                value={this.state.user.mail} 
                onChange={this.changing}/><br />
                <label htmlFor="" class="ink">Gender : </label>
                <input 
                type="text" 
                name="gender" 
                value={this.state.user.gender} 
                onChange={this.changing}/><br />
                <label htmlFor="" class="ink">Contact no : </label>
                <input 
                type="text" 
                name="cno" 
                value={this.state.user.cno} 
                onChange={this.changing}/><br />
                <h3>Educational Qualifiation</h3>
                <label htmlFor="" class="ink">Degree : </label>
                <input 
                type="text" 
                name="deg" 
                value={this.state.user.deg} 
                onChange={this.changing}/><br />
                <label htmlFor="" class="ink">Engineering : </label>
                <input 
                type="text" 
                name="eng" 
                value={this.state.user.eng} 
                onChange={this.changing}/><br />
                <label htmlFor="" class="ink">Hobbies : </label>
                <input 
                type="text" 
                name="hob" 
                value={this.state.user.hob} 
                onChange={this.changing} /><br />
                <h3>Address </h3>
                <textarea name="add" id="" cols="29" rows="4" 
                value={this.state.user.add} 
                onChange={this.changing}></textarea>
                <br /><br /><br />
                    {this.state.isEdit ? (
                        <button type="button" onClick={this.updateuser}>
                            UpdateUser
                        </button>
                    ) : (
                        <button type="button" onClick={this.adduser}>
                            AddUser
                        </button>
                    )}
                    <br /><br />
                </form>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Password</th>
                            <th>Email-id</th>
                            <th>Gender</th>
                            <th>Contact no </th>
                            <th>Degree</th>
                            <th>Engineering</th>
                            <th>Hobbies</th>
                            <th>Address</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((usr, i) => {
                            return (
                                <tr key={i}>
                                    <td>{usr.name}</td>
                                    <td>{usr.pass}</td>
                                    <td>{usr.mail}</td>
                                    <td>{usr.gender}</td>
                                    <td>{usr.cno}</td>
                                    <td>{usr.deg}</td>
                                    <td>{usr.eng}</td>
                                    <td>{usr.hob}</td>
                                    <td>{usr.add}</td>
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