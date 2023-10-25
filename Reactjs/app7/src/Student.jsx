import { Component } from "react";

export default class User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cname: "",
            pname: "",
            ppno:"",
            rv:"",
            pano:"",
            doe:"",
            en:"",
            bn:"",
        };
    }
    handlechange = (e) => {
        console.log(e.target.name)
        let proName = e.target.name
        this.setState({ [proName]: e.target.value });
    }
    addUser = () => {
        let user = {
            cname: this.state.cname,
            pname: this.state.pname,
            ppno:this.state.ppno,
            rv:this.state.rv,
            pano:this.state.pano,
            doe:this.state.doe,
            en:this.state.en,
            bn:this.state.bn,
            ebq:this.state.ebq,
            sp:this.state.sp,
        }
        let newUsers = [...this.state.users];
    newUsers.push(user);
    this.setState({users:newUsers,fname:"",lname:""})
    console.log(user);
  };
        
    
    render() {
        return(<form>
            <div>
            <label htmlFor="" class="ji">Customer Name : </label>
            <input type="text" name="cname" value={this.state.cname} onChange={this.handlechange} /><br />
            <label htmlFor="" class="ji">Part Name : </label>
            <input type="text" name="pname" value={this.state.pname} onChange={this.handlechange} /><br />
            <label htmlFor="" class="ji">Part Print Number : </label>
            <input type="text" name="ppno" value={this.state.ppno} onChange={this.handlechange}/><br />
            <label htmlFor="" class="ji">Revision : </label>
            <input type="text" name="rv" value={this.state.rv} onChange={this.handlechange}/><br />
            <label htmlFor="" class="ji">Part Number : </label>
            <input type="text" name="pano" value={this.state.pano} onChange={this.handlechange}/><br />
            <label htmlFor="" class="ji">Date of Estimate : </label>
            <input type="text" name="doe" value={this.state.doe} onChange={this.handlechange}/><br />
            <label htmlFor="" class="ji">Estimator Name : </label>
            <input type="text" name="en" value={this.state.en} onChange={this.handlechange}/><br />
            <label htmlFor="" class="ji">Buyer Name : </label>
            <input type="text" name="bn" value={this.state.bn} onChange={this.handlechange}/><br />
            <label htmlFor="" class="ji">Estimated base quantity : </label>
            <input type="text" name="ebq" value={this.state.ebq} onChange={this.handlechange}/><br />
            <label htmlFor="" class="ji">Scrap percentage : </label>
            <input type="text" name="sp" value={this.state.sp} onChange={this.handlechange}/><br /><br /><br />
            <button type="button" onClick={this.addUser}>Submit</button>
            </div>
        </form>
        );
    }
