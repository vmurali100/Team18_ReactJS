import React, { Component } from 'react'

export default class Student12 extends Component {
    constructor() {
        super();
        this.state = {
            message1: false,
            message2: false
        }
    }
    handlechangebtn = () => {
        this.setState({
            message1: true
        })
    }
    handlechangebtn2 = () => {
        this.setState({
            message2: true
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.handlechangebtn} style={{ color: "blue" }}> 
                {this.state.message1 ? "clicked!!" : "clickme"}
                </button>
               
                <br />
                <button onClick={this.handlechangebtn2} style={{color:"red"}}>
                {this.state.message2 ? "nothing!!" : "clickme"}
                </button><hr/>
               

            </div>
        )
    }
}

