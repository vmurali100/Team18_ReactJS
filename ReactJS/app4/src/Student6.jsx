import { useState } from "react";

export default function Student6(){
    const[message, setmessage] = useState("Welcome")
   const changename = () =>{
        setmessage("Good Bye")
    }
    return(
        <div>
            <button onClick={ changename}>Changemessage</button>
            <h2>{message}</h2>
            <hr/>
        </div>
    )
}