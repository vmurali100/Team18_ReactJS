import { useState } from "react"
import { Evr } from "./Evr"

export  const Eer=()=>{
    const[name,setName]=useState("vanitha")
    const[email,setEmail]=useState("vanitha@gmail.com ")
    const Change=()=>{
        setName("babu")
        setEmail("babu@gmail.com")
    }
    return <div>
        {/* <h2>Eswari reddy</h2>
        <h2>vanitha reddy</h2> */}
       
    <Evr name={name} email={email}/>
    <button onClick={Change}>change Text</button>
    </div>
}