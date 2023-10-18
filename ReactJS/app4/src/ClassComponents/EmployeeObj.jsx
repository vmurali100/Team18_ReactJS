import { Component } from "react"

export default class EmployeeObj extends Component {
    constructor(props){
        super()
    }
    render(){
        return <ul>
        <li>{this.props.employee.fname}</li>
        <li>{this.props.employee.lname}</li>
      </ul>
    }
}