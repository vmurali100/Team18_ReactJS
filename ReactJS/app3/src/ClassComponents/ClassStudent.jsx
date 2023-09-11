import { Component } from "react";

class Student extends Component{
    constructor(){
        super()
        this.state={
            fname:"Ram Krishna",
            employee :{
                name:"Raghu",
                email:"raghu@gmail.com",
            },
            subjects:["Sub1","Sub2","Sub3","Sub4"]

        }
    }
    render(){
        return <div>
            <h2>Welcome to Student Component !!</h2>
            <h2>Student Name is :{this.state.fname}</h2>
            <ul>
                <li>{this.state.employee.email}</li>
                <li>{this.state.employee.name}</li>
            </ul>
            <ul>
                {this.state.subjects.map((sub)=>{
                    return <li>{sub}</li>
                })}
            </ul>
        </div>
    }
}

export default Student