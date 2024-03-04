import { useState } from "react";

export default function Taggle(){
    const[change,setchange] = useState(true)
    const Taggle =()=>{
        setchange(!change) 
    }
    return(
        <div>
            <h3>{change ? "Start" :"stop"}</h3>
            <button onClick={Taggle}>taggle</button><hr/>
           
        </div>
    )
} 