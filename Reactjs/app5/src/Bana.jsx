import { useState } from "react";

function Vanitha() {
    var [person, setPerson] = useState("hello")
    var [student, setStudent] = useState(["ramya", "kavya"])
    var [employee, setEmployee]=useState({
        fname:"Keeriti",
        lname:"Shetty",})
    return (
        <div>
            <h2>{person}</h2>
            <ul>
               {student.map((val)=>{
                return <li>{val}</li>
               })}
            </ul>
            <ul>
                {Object.values(employee).map((objval)=>{
                 return <li>{objval}</li>
                })}
            </ul>
        </div>
    )
}
export default Vanitha;
