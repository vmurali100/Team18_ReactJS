import React, { Component } from "react";
import axios from "axios";

export default class Avi2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            isEdit: false,
            user: {
                university: "",
                institute: "",
                Branch: "",
                Degree: "",
                avgcpi: "",
                exp: "",
                wb: "",
            }
        };
    }

    change = (e) => {

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
            university: "",
            institute: "",
            Branch: "",
            Degree: "",
            avgcpi: "",
            exp: "",
            wb: "",
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
            <div id="imu">
                <form>
                    <h4>Registration Details</h4>
                    <label htmlFor="" class="im">University : </label>
                    <input
                        type="text"
                        name="university"
                        value={this.state.user.university}
                        onChange={this.change} /><br />
                    <label htmlFor="" class="im">Institute : </label>
                    <input
                        type="text"
                        name="institute"
                        value={this.state.user.institute}
                        onChange={this.change} /><br />
                    <label htmlFor="" class="im">Branch : </label>
                    <input
                        type="text"
                        name="Branch"
                        value={this.state.user.Branch}
                        onChange={this.change} /><br />
                    <label htmlFor="" class="im">Degree : </label>
                    <input
                        type="text"
                        name="Degree"
                        value={this.state.user.Degree}
                        onChange={this.change} /><br />
                    <label htmlFor="" class="im">Average CPI : </label>
                    <input
                        type="text"
                        name="avgcpi"
                        value={this.state.user.avgcpi}
                        onChange={this.change} /><br />
                    <label htmlFor="" class="im">Experience : </label>
                    <input
                        type="text"
                        name="exp"
                        value={this.state.user.exp}
                        onChange={this.change} /><br />
                    <label htmlFor="" class="im">Your website or Blog : </label>
                    <input
                        type="text"
                        name="wb"
                        value={this.state.user.wb}
                        onChange={this.change} /><br /><br />
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
                            <th>University</th>
                            <th>Institute</th>
                            <th>Branch</th>
                            <th>Degree</th>
                            <th>Average CPI</th>
                            <th>Experience</th>
                            <th>Your website or Blog</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((usr, i) => {
                            return (
                                <tr key={i}>
                                    <td>{usr.university}</td>
                                    <td>{usr.institute}</td>
                                    <td>{usr.Branch}</td>
                                    <td>{usr.Degree}</td>
                                    <td>{usr.avgcpi}</td>
                                    <td>{usr.exp}</td>
                                    <td>{usr.wb}</td>
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