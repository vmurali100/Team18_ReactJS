import { useState } from "react";

export default function Taggle(){
    const[array,setarray]=useState(true)
    const Taggle =()=>{
        setarray(!true) 
    }
    return(
        <div>
            <h3>{Taggle ? "Start" :"stop"}</h3>
            <button onClick={Taggle}>taggle</button>
           
        </div>
    )
} 