import { useState } from "react";

function Vanitha() {
    var [person, setPerson] = useState("hello")
    return (
        <div>
            <h2>{person}</h2>
        </div>
    )
}
export default Vanitha;
