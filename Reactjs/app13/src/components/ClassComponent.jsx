import React, { Component } from 'react'

export default class ClassComponent extends Component {
  render() {

    this.state={
        myName:"vanitha",
        myVillage:"Chittoor",
        myObj:{
            fName:"vanitha",
            lName:"ggg",
            email:"vanitha@gmail.com"
        }
    }

    return (
      <div>
<h1>{this.state.myName}</h1>
<h1>{this.state.myVillage}</h1>

<ul>
    {Object.values(this.state.myObj).map((o)=>{
        return <li>{o}</li>
    })}
</ul>
      </div>
    )
  }
}
