import { useState } from "react"
import { Mokshith } from "./Mokshith"

export const Vanitha=()=>{
    const[name,setName]=useState("vanitha")
    const[email,setEmail]=useState("RRR2gmail.com")
    const adduser=()=>{
        setName("dilli babu")
        setEmail("vvv@gmail.com")
       
    }
    return <div>
        <h1>Mokshith reddy</h1>
        <button onClick={adduser}>Adduser</button>
        <Mokshith name={name} email={email}/>
    </div>
}