const { useState } = require("react");

function Student(){
    var [person,setperson]=useState("welcome to reactJS");
    return(
        <div>
            <h2>{person}</h2>
        </div>
    )
    }
    export default Student;