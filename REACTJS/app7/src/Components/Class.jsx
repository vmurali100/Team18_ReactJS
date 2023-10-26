import React, { Component } from 'react'

export default class  extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"",
         players:{},
         teams:[]
      }

    }
    showmessage=()=>{
      this.setState({message:"We are cricket players"})
    }
    showplayers=()=>{
      this.setState({
        players:{
          india:"virat Kohli",
          Newzland:"Kane Willmson",
          austraila:"Maxwell",
          westIndies:"Chris Gayle"
        }
      })
    }
    showTeams=()=>{
      this.setState({
        teams:["India","Newzland","austraila","westIndies"]
      })
    }
  render() {
    return (
      <div>
       <button onClick={this.showmessage}>Show message</button>
       <h2>{this.state.message}</h2>
       <hr />
       <button onClick={this.showplayers}>Show Players</button>
       <ul>
        <li>{this.state.players.india}</li>
        <li>{this.state.players.Newzland}</li>
        <li>{this.state.players.austraila}</li>
        <li>{this.state.players.westIndies}</li>
       </ul>
       <hr />
       <button onClick={this.showTeams}>Show Teams</button>
      <ul>
        {this.state.teams.map((tem)=>{
          return <li>{tem}</li>
        })}
      </ul>
      </div>
    )
  }
}