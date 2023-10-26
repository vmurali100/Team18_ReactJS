import React, { Component } from "react";

export default class User1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            university: "",
            institute: "",
            branch: "",
            degree: "",
            avgcpi: "",
            exp: "",
            wb: "",
            userDetails: [],
        };
    }

    handleChange = (e) => {
        let fieldName = e.target.name;
        this.setState({ [fieldName]: e.target.value });
    }

    addUser = () => {
        let userDetail = {
            university: this.state.university,
            institute: this.state.institute,
            branch: this.state.branch,
            degree: this.state.degree,
            avgcpi: this.state.avgcpi,
            exp: this.state.exp,
            wb: this.state.wb,
        };

        this.setState((prevState) => ({
            userDetails: [...prevState.userDetails, userDetail],
        }));

        this.setState({
            university: "",
            institute: "",
            branch: "",
            degree: "",
            avgcpi: "",
            exp: "",
            wb: "",
        });
    }

    render() {
        return (
            <div>
                <form>
                    <h4>Registration Details</h4>
                    <div id="imu">
                        <label htmlFor="university" className="im">University: </label>
                        <input type="text" name="university" value={this.state.university} onChange={this.handleChange} /><br />
                        <label htmlFor="institute" className="im">Institute: </label>
                        <input type="text" name="institute" value={this.state.institute} onChange={this.handleChange} /><br />
                        <label htmlFor="branch" className="im">Branch: </label>
                        <input type="text" name="branch" value={this.state.branch} onChange={this.handleChange} /><br />
                        <label htmlFor="degree" className="im">Degree: </label>
                        <input type="text" name="degree" value={this.state.degree} onChange={this.handleChange} /><br />
                        <label htmlFor="avgcpi" className="im">Average CPI: </label>
                        <input type="text" name="avgcpi" value={this.state.avgcpi} onChange={this.handleChange} /><br />
                        <label htmlFor="exp" className="im">Experience: </label>
                        <input type="text" name="exp" value={this.state.exp} onChange={this.handleChange} /><br />
                        <label htmlFor="wb" className="im">Your website or Blog: </label>
                        <input type="text" name="wb" value={this.state.wb} onChange={this.handleChange} /><br />
                        <br /><br />
                        <button type="button" onClick={this.addUser}>Submit</button><br /><br />
                    </div>
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
                            <th>Website or Blog</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.userDetails.map((userDetail, index) => (
                            <tr key={index}>
                                <td>{userDetail.university}</td>
                                <td>{userDetail.institute}</td>
                                <td>{userDetail.branch}</td>
                                <td>{userDetail.degree}</td>
                                <td>{userDetail.avgcpi}</td>
                                <td>{userDetail.exp}</td>
                                <td>{userDetail.wb}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
