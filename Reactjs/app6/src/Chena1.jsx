import { useState } from "react";

function Vanitha() {
    var [person, setPerson] = useState("")
    var [student, setStudent] = useState([])
    var [employee, setEmployee]=useState({})
        const handlecmp=()=>{
            setPerson("Barclay's")
        }
        const handleemp=()=>{
            setStudent(["ramya", "kavya"])
        }
        const handlemls=()=>{
            setEmployee({
                mail1:"ramya456@gmail.com",
                mail2:"kav890giri@gmail.com"
            })
        }
    return (
        <div>
            <h2>Welcome to the Company</h2>
            <button onClick={handlecmp}>Show Company</button>
            <h2>{person}</h2>
            <h2>Employee Details :</h2>
            <button onClick={handleemp}>Show Employee</button>
            <ul>
               {student.map((val)=>{
                return <li>{val}</li>
               })}
            </ul>
            <button onClick={handlemls}>Show mails</button>
            <ul>
                {Object.values(employee).map((objval)=>{
                 return <li>{objval}</li>
                })}
            </ul>
        </div>
    )
}
export default Vanitha;
