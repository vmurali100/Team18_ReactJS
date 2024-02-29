import { useState } from "react";

export default function Student4() {
    const [message, setmessage] = useState("Hello World")
    return (
        <div>
            <h2>{message}</h2>
            <hr/>
        </div>


    )
}