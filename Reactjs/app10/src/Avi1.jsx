import React, { Component } from "react";
import axios from "axios";

export default class Student extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            isEdit: false,
            user: {
                cname: "",
                pname: "",
                ppno: "",
                rv: "",
                pano: "",
                doe: "",
                en: "",
                bn: "",
                ebq: "",
                sp: ""
            }
        };
    }

    handlechange = (e) => {

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
            cname: "",
            pname: "",
            ppno: "",
            rv: "",
            pano: "",
            doe: "",
            en: "",
            bn: "",
            ebq: "",
            sp: ""
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
            <div>
                <form>
                    <label htmlFor="" class="ji">Customer Name : </label>
                    <input
                        type="text"
                        name="cname"
                        value={this.state.user.cname}
                        onChange={this.handlechange} /><br />
                    <label htmlFor="" class="ji">Part Name : </label>
                    <input
                        type="text"
                        name="pname"
                        value={this.state.user.pname}
                        onChange={this.handlechange} /><br />
                    <label htmlFor="" class="ji">Part Print Number : </label>
                    <input
                        type="text"
                        name="ppno"
                        value={this.state.user.ppno}
                        onChange={this.handlechange} /><br />
                    <label htmlFor="" class="ji">Revision : </label>
                    <input
                        type="text"
                        name="rv"
                        value={this.state.user.rv}
                        onChange={this.handlechange} /><br />
                    <label htmlFor="" class="ji">Part Number : </label>
                    <input
                        type="text"
                        name="pano"
                        value={this.state.user.pano}
                        onChange={this.handlechange} /><br />
                    <label htmlFor="" class="ji">Date of Estimate : </label>
                    <input
                        type="text"
                        name="doe"
                        value={this.state.user.doe}
                        onChange={this.handlechange} /><br />
                    <label htmlFor="" class="ji">Estimator Name : </label>
                    <input
                        type="text"
                        name="en"
                        value={this.state.user.en}
                        onChange={this.handlechange} /><br />
                    <label htmlFor="" class="ji">Buyer Name : </label>
                    <input
                        type="text"
                        name="bn"
                        value={this.state.user.bn}
                        onChange={this.handlechange} /><br />
                    <label htmlFor="" class="ji">Estimated base quantity : </label>
                    <input
                        type="text"
                        name="ebq"
                        value={this.state.user.ebq}
                        onChange={this.handlechange} /><br />
                    <label htmlFor="" class="ji">Scrap percentage : </label>
                    <input
                        type="text"
                        name="sp"
                        value={this.state.user.sp}
                        onChange={this.handlechange} /><br /><br /><br />
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
                            <th>Customer Name </th>
                            <th>Part Name</th>
                            <th>Part Print Number</th>
                            <th>Revision</th>
                            <th>Part Number</th>
                            <th>Date of Estimate</th>
                            <th>Estimator Name</th>
                            <th>Buyer Name</th>
                            <th>Estimated base quantity</th>
                            <th>Scrap percentage</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((usr, i) => {
                            return (
                                <tr key={i}>
                                <td>{usr.cname}</td>
                                <td>{usr.pname}</td>
                                <td>{usr.ppno}</td>
                                <td>{usr.rv}</td>
                                <td>{usr.pano}</td>
                                <td>{usr.doe}</td>
                                <td>{usr.en}</td>
                                <td>{usr.bn}</td>
                                <td>{usr.ebq}</td>
                                <td>{usr.sp}</td>
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