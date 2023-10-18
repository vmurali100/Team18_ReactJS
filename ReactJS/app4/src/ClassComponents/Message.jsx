import { Component } from "react"

export default class MessageComp extends Component{
    constructor(props){
        super()
    }

    render(){
        return <h2>{this.props.msg}</h2>
    }
}