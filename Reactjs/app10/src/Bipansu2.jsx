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
        console.log(details)
    }
    render() {
        return (<form>

            <div id="inki">
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
            </div>
        </form>
        );
    }
}