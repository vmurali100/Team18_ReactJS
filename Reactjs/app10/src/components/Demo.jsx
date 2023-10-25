import React, { Component } from 'react'
import axios from 'axios';


export default class Demo extends Component {
    constructor(){
        super()
        this.state={
            
            user:[]
        }
    }
   componentDidMount=()=>{
    debugger
    axios.get("https://random-data-api.com/api/v2/users?size=10").then((response)=>{
        debugger;
        this.setState(response.data)
    })
   }
  render() {
    return (
      <div>
        {
            console.log(this.state.user)
        }
      </div>
    )
  }
}
