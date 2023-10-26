import React, { Component } from "react";

export default class User extends Component {
    constructor(props) {
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
            ebq: "", // Added this state variable for estimated base quantity
            sp: "",  // Added this state variable for scrap percentage
            users: [],
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    addUser = () => {
        const user = {
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

        const newUsers = [...this.state.users];
        newUsers.push(user);

        this.setState({
            users: newUsers,
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
        });
    };

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="cname" className="ji">Customer Name: </label>
                    <input type="text" name="cname" value={this.state.cname} onChange={this.handleChange} /><br />
                    <label htmlFor="pname" className="ji">Part Name: </label>
                    <input type="text" name="pname" value={this.state.pname} onChange={this.handleChange} /><br />
                    <label htmlFor="ppno" className="ji">Part Print Number: </label>
                    <input type="text" name="ppno" value={this.state.ppno} onChange={this.handleChange} /><br />
                    {/* Add similar labels and inputs for other fields */}
                    <label htmlFor="ebq" className="ji">Estimated base quantity: </label>
                    <input type="text" name="ebq" value={this.state.ebq} onChange={this.handleChange} /><br />
                    <label htmlFor="sp" className="ji">Scrap percentage: </label>
                    <input type="text" name="sp" value={this.state.sp} onChange={this.handleChange} /><br /><br /><br />
                    <button type="button" onClick={this.addUser}>Submit</button>
                </form><br></br><br></br><br></br><br></br><br></br><br></br>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Customer Name</th>
                            <th>Part Name</th>
                            <th>part print number</th>
                            {/* Add similar headers for other fields */}
                            <th>Estimated base quantity</th>
                            <th>Scrap percentage</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((usr, index) => (
                            <tr key={index}>
                                <td>{usr.cname}</td>
                                <td>{usr.pname}</td>
                                <td>{usr.ppno}</td>
                                {/* Add similar TDs for other fields */}
                                <td>{usr.ebq}</td>
                                <td>{usr.sp}</td>
                                <td>
                                    <button>Edit</button>
                                </td>
                                <td>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
