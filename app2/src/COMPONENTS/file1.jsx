import { useState } from "react"
import { Sample2 } from "./Sample2"

export const file1=()=>{
 const [Name,setName]=useState("shanthi")
 const updateName=()=>{
    setName("thiyash")

 }

return <div>
    <button onClick={updateName}>click</button>
    <file2 Myname={Name}/>
    <file2 Myname1={Name}/>
</div>
}