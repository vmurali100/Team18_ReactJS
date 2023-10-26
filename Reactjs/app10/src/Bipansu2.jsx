import { Component } from "react";

export default class Usam extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            pass: "",
            mail: "",
            gender: "",
            cno: "",
            deg: "",
            eng: "",
            hob: "",
            add: "",
            users:[]
        };
    }
    changing = (e) => {
        console.log(e.target.name)
        let proName = e.target.name
        this.setState({ [proName]: e.target.value });
    }
    addUser = () => {
        let details = {
            name: this.state.name,
            pass: this.state.pass,
            mail: this.state.mail,
            gender: this.state.gender,
            cno: this.state.cno,
            deg: this.state.deg,
            eng: this.state.eng,
            hob: this.state.hob,
            add: this.state.add,
        }
        let newUsers = [...this.state.users];
        newUsers.push(details);
        this.setState({ users: newUsers, name: "", pass: "", mail: "", gender: "", cno: "", deg: "", eng: "" ,hob:"",add:""})
        console.log(details)
    }
    render() {
        return (

            <div id="inki">
                <form>
                <h3>Personal Details</h3>
                <label htmlFor="" class="ink">Name : </label>
                <input type="text" name="name" value={this.state.name} onChange={this.changing} /><br />
                <label htmlFor="" class="ink">Password : </label>
                <input type="text" name="pass" value={this.state.pass} onChange={this.changing} /><br />
                <label htmlFor="" class="ink">Email-id : </label>
                <input type="text" name="mail" value={this.state.mail} onChange={this.changing} /><br />
                <label htmlFor="" class="ink">Gender : </label>
                <input type="text" name="gender" value={this.state.gender} onChange={this.changing} /><br />
                <label htmlFor="" class="ink">Contact no : </label>
                <input type="text" name="cno" value={this.state.cno} onChange={this.changing} /><br />
                <h3>Educational Qualifiation</h3>
                <label htmlFor="" class="ink">Degree : </label>
                <input type="text" name="deg" value={this.state.deg} onChange={this.changing} /><br />
                <label htmlFor="" class="ink">Engineering : </label>
                <input type="text" name="eng" value={this.state.eng} onChange={this.changing} /><br />
                <label htmlFor="" class="ink">Hobbies : </label>
                <input type="text" name="hob" value={this.state.hob} onChange={this.changing} /><br />
                <h3>Address </h3>
                <textarea name="add" id="" cols="29" rows="4" value={this.state.add} onChange={this.changing}></textarea>
                <br /><br />
                <button type="button" onClick={this.addUser}>click</button><br /><br />
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
                        {this.state.users.map((usr) => {
                            return <tr>
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