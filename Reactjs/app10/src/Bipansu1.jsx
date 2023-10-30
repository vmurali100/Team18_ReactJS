import { Component } from "react";

export default class User1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            university: "",
            institute: "",
            Branch: "",
            Degree: "",
            avgcpi: "",
            exp: "",
            wb: "",
            users: [],
            isEdit:false,
            gIndex:0,
        };
    }
    change = (e) => {
        console.log(e.target.name)
        let proName = e.target.name
        this.setState({ [proName]: e.target.value });
    }
    addUser = () => {
        let sami = {
            university: this.state.university,
            institute: this.state.institute,
            Branch: this.state.Branch,
            Degree: this.state.Degree,
            avgcpi: this.state.avgcpi,
            exp: this.state.exp,
            wb: this.state.wb,
        }
        let newUsers = [...this.state.users];
        newUsers.push(sami);
        this.setState({ users: newUsers, university: "", institute: "", Branch: "", Degree: "", avgcpi: "", exp: "", wb: "" })
        console.log(sami)
    }
    handledelete = (i) => {
    let newUsers=[...this.state.users];
    newUsers.splice(i,1);
    this.setState({users:newUsers})
    }
    handleedit = (usr,i) => {
        this.setState({
            university:usr.university,
            institute: usr.institute,
            Branch: usr.Branch,
            Degree:usr.Degree,
            avgcpi: usr.avgcpi,
            exp: usr.exp,
            wb: usr.wb,
            isEdit:true
        })
    }
    updateuser = () => {
        let newUsers = [...this.state.users];
        let user = {
            university: this.state.university,
            institute: this.state.institute,
            Branch: this.state.Branch,
            Degree: this.state.Degree,
            avgcpi: this.state.avgcpi,
            exp: this.state.exp,
            wb: this.state.wb,
            isEdit:false
        };
        newUsers[this.state.gIndex] = { ...user };
        this.setState({ users: newUsers,isEdit:false });
        this.clearForm()
    }
    clearForm = () => {
        this.setState ({
            university: "",
            institute: "",
            Branch: "",
            Degree: "",
            avgcpi: "",
            exp: "",
            wb: "",
        })
    }
    render() {
        return (
            <div id="imu"> 
            <form>
                <h4>Registration Details</h4>
                <label htmlFor="" class="im">University : </label>
                <input type="text" name="university" value={this.state.university} onChange={this.change} /><br />
                <label htmlFor="" class="im">Institute : </label>
                <input type="text" name="institute" value={this.state.institute} onChange={this.change} /><br />
                <label htmlFor="" class="im">Branch : </label>
                <input type="text" name="Branch" value={this.state.Branch} onChange={this.change} /><br />
                <label htmlFor="" class="im">Degree : </label>
                <input type="text" name="Degree" value={this.state.Degree} onChange={this.change} /><br />
                <label htmlFor="" class="im">Average CPI : </label>
                <input type="text" name="avgcpi" value={this.state.avgcpi} onChange={this.change} /><br />
                <label htmlFor="" class="im">Experience : </label>
                <input type="text" name="exp" value={this.state.exp} onChange={this.change} /><br />
                <label htmlFor="" class="im">Your website or Blog : </label>
                <input type="text" name="wb" value={this.state.wb} onChange={this.change} /><br /><br />
                {this.state.isEdit ? (
                        <button type="button" onClick={this.updateuser}>
                            UpdateUser
                        </button>
                    ) : (
                        <button type="button" onClick={this.addUser}>
                            AddUser
                        </button>
                    )}<br /><br />
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
                        {this.state.users.map((usr,i) => {
                            return <tr key={i}>
                                <td>{usr.university}</td>
                                <td>{usr.institute}</td>
                                <td>{usr.Branch}</td>
                                <td>{usr.Degree}</td>
                                <td>{usr.avgcpi}</td>
                                <td>{usr.exp}</td>
                                <td>{usr.wb}</td>
                                <td>
                                    <button onClick={()=>this.handleedit(usr,i)}>Edit</button>
                                </td>
                                <td>
                                    <button onClick={()=>this.handledelete(i)}>Delete</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}