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
        console.log(sami)
    }
    render() {
        return (<form>
            <h4>Registration Details</h4>
            <div id="imu">
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
                <input type="text" name="wb" value={this.state.wb} onChange={this.change} /><br />
                <br /><br />
                <button type="button" onClick={this.addUser}>click</button><br /><br />
            </div>
        </form>
        );
    }
}