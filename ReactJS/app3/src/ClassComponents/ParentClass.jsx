import { Component } from "react";
import { Child } from "./ChildClass";

export class Parent extends Component{
    constructor(){
        super()
        this.state={
            message:"Welcome to React Class Component !!",
            studentDetails:{
                fname:"Ram",
                lname:"Krishna",
                email:"Ram@gmail.com"
            },
            subjects:["HTML","CSS","javascript","ReactJS"]
        }
    }

    render (){
        return <div>
            <Child 
            message = {this.state.message} 
            studentDetails={this.state.studentDetails}
            subjects={this.state.subjects}
            />
        </div>
    }
}