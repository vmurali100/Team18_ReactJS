import { Component } from "react";

 export class ShanthiClass extends Component{

    constructor(){
        super()

        this.state={
            myName:"shanthi",
            mySubjects:["html","css","js"],
            myobject:{
                myname:"shanthi",
                myage:30,
            }

        }
    }



    render(){

        return <div>
        
    <h1>My Name is :{this.state.myName}</h1>

    {this.state.mySubjects.map((s)=>{
        return <li>{s}</li>
    })}
    {
        Object.values(this.state.myobject).map((o)=>{
            return <li>{o}</li>
        })
    }
        </div>
    }
}
``