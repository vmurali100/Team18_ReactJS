import React, { Component } from "react";
import axios from "axios"

        export default class Student extends Component {
            constructor(props){
                super(props);
                this.state = {
                    cname: "",
                    pname: "",
                    ppno: "",
                    rv: "",
                    pano: "",
                    doe: "",
                    en: "",
                    bn: "",
                    ebq: "",
                    sp: "",
                    users: [],
                    gIndex: 0,
                    isEdit: false,
                };
            }
            handlechange = (e) => {
                console.log(e.target.name)
                let proName = e.target.name
                this.setState({ [proName]: e.target.value });
            }
            updateuser = () =>{
                var allUsersCopy = [...this.state.users];
            allUsersCopy[this.state.gIndex] = this.state.user;
            this.setState({ users: allUsersCopy, isEdit: false });
        
            }
            getdatafromserver= ()=>{
                axios.get("http://localhost:3000/students").then (res=>{
                    console.log(res)
                    this.setState({users:res.data})
                    
                })
            }
            adduser = () => {
                let user = {
                    cname: this.state.cname,
                    pname: this.state.pname,
                    ppno: this.state.ppno,
                    rv: this.state.rv,
                    pano: this.state.pano,
                    doe: this.state.doe,
                    en: this.state.en,
                    bn: this.state.bn,
                    ebq: this.state.ebq,
                    sp: this.state.sp,
                }
                let newUsers = [...this.state.users];
                newUsers.push(user);
                this.setState({ users: newUsers, cname: "", pname: "", ppno: "", rv: "", pano: "", doe: "", en: "", bn: "", ebq: "", sp: "" })
                console.log(user)
            }
            handledelete = (i) => {
                let newUsers = [...this.state.users];
                newUsers.splice(i, 1);
                this.setState({ users: newUsers });
            }
            handleedit = (usr,i) => {
                this.setState({
                    cname:usr.cname,
                    pname: usr.pname,
                    ppno: usr.ppno,
                    rv: usr.rv,
                    pano: usr.pano,
                    doe: usr.doe,
                    en: usr.en,
                    bn: usr.bn,
                    ebq: usr.ebq,
                    sp: usr.sp,
                    isEdit:true
                })
            }
            updateuser = () =>{
                let newUsers = [...this.state.users];
                let user = {
                    cname: this.state.cname,
                    pname: this.state.pname,
                    ppno: this.state.ppno,
                    rv: this.state.rv,
                    pano: this.state.pano,
                    doe: this.state.doe,
                    en: this.state.en,
                    bn: this.state.bn,
                    ebq: this.state.ebq,
                    sp: this.state.sp,
                };
                newUsers[this.state.gIndex] = { ...user };
                this.setState({ users: newUsers,isEdit:false });
                this.clearForm()
            }
            clearForm = () => {
                this.setState ({
                    cname: "",
                    pname: "",
                    ppno: "",
                    rv: "",
                    pano: "",
                    doe: "",
                    en: "",
                    bn: "",
                    ebq: "",
                    sp: "",
            })
        }
            render() {
                return (
                    <div>
                        <form>
                            <label htmlFor="" class="ji">Customer Name : </label>
                            <input type="text" name="cname" value={this.state.cname} onChange={this.handlechange} /><br />
                            <label htmlFor="" class="ji">Part Name : </label>
                            <input type="text" name="pname" value={this.state.pname} onChange={this.handlechange} /><br />
                            <label htmlFor="" class="ji">Part Print Number : </label>
                            <input type="text" name="ppno" value={this.state.ppno} onChange={this.handlechange} /><br />
                            <label htmlFor="" class="ji">Revision : </label>
                            <input type="text" name="rv" value={this.state.rv} onChange={this.handlechange} /><br />
                            <label htmlFor="" class="ji">Part Number : </label>
                            <input type="text" name="pano" value={this.state.pano} onChange={this.handlechange} /><br />
                            <label htmlFor="" class="ji">Date of Estimate : </label>
                            <input type="text" name="doe" value={this.state.doe} onChange={this.handlechange} /><br />
                            <label htmlFor="" class="ji">Estimator Name : </label>
                            <input type="text" name="en" value={this.state.en} onChange={this.handlechange} /><br />
                            <label htmlFor="" class="ji">Buyer Name : </label>
                            <input type="text" name="bn" value={this.state.bn} onChange={this.handlechange} /><br />
                            <label htmlFor="" class="ji">Estimated base quantity : </label>
                            <input type="text" name="ebq" value={this.state.ebq} onChange={this.handlechange} /><br />
                            <label htmlFor="" class="ji">Scrap percentage : </label>
                            <input type="text" name="sp" value={this.state.sp} onChange={this.handlechange} /><br /><br /><br />
                            {this.state.isEdit ? (
                                <button type="button" onClick={this.updateuser}>
                                    UpdateUser
                                </button>
                            ) : (
                                <button type="button" onClick={this.adduser}>
                                    AddUser
                                </button>
                            )}
                        </form><br />
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
                                    return <tr key={i}>
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
                                            <button onClick={() => this.handleedit(usr,i)}>Edit</button>
                                        </td>
                                        <td>
                                            <button onClick={() => this.handledelete(i)}>Delete</button>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                );
            }
        }
        