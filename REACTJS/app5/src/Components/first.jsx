import { useState } from "react"
import { Second } from "./Second"

export const First=()=>{
    const[name,setname]=useState("jygl9");
    const[email,setemail]=useState("rkdskr@,vsdk")
    const mhyfk=()=>{
        setname("jhgl8");
        setemail("dmlkdsm@123")
    }
    return <div>
         
        <h2>Welcome to jaga website</h2>
        <button onClick={mhyfk}>gtetun</button>
<Second name={name} email={email}/>
    </div>
} 
