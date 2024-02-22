import { useState } from "react";

export default function User(){
    const[message,setmessage]= useState("Hi...Welcome to Reactjs")
}
return(
    <div>
<h2>{message}</h2>

    </div>
)