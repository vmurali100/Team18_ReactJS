import { useState } from "react";

function Student() {
    var [person, setPerson] = useState("welcome to Reactjs")
    return (
        <div>
            <h2>{person}</h2>
        </div>
    )
}
export default Student;