import { useState } from "react";

function Viraj (){
    const [msg,setmsg]=useState("")
     const handleclk=()=>{
        setmsg("Welcome to the Technova Hackathon")
     }
     const [participants,setparticipants]=useState([])
     const handleparp=()=>{
        setparticipants(["Vishal","Vamsi","Vanitha","Akul","Pardeep"])
     }
     const [winner,setwinner]=useState({})
     const handlewnr=()=>{
        setwinner({
            name:"Akul",
            rno:"128956"
        })
     }
    return(
        <div>
            <button onClick={handleclk}>Show Hackathon</button>
            <h2>{msg}</h2>
            <button onClick={handleparp}>Show Participants</button>
            <ul>
                {participants.map((val)=>{
                    return <li>{val}</li>
                })}
            </ul>
            <button onClick={handlewnr} >Display Winner</button>
            <ul>
                <li>{winner.name}</li>
                <li>{winner.rno}</li>
            </ul>
        </div>
    )
}
export default Viraj;