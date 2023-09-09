import { useState } from "react"
import { Sample2 } from "./Sample2"

export const Sample1=()=>{

    const [Name,setName]=useState("Rama")

   const updateName=()=>{
    setName("Sita")
   }
    return <div>    
        <button onClick={updateName}> click</button>
      <Sample2 Myname={Name}/>
      <Sample2 Myname1={Name}/>
    </div>
}