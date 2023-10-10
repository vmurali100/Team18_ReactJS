import { useState } from "react"

function Kilji (){
    const[message,setmessage]=useState("Telesta Company Shortlisted Candidates")
    const[contact,setconatct]=useState("For more details contact")
    const[student,setstudent]=useState(["Virat","Viraj","Koushal","Akhira","Jaswika"])
    const[employee,setemployee]=useState({
        mail:"textinfo@gmail.com",
        phno:"0405-788893299"
    })
    return(
        <div> 
            <h2>{message}</h2>
            <ul>
                {student.map((val)=>{
                    return <li>{val}</li>
                })}
            </ul>
            <ul>
                <h2>{contact}</h2>
               <li>{employee.mail}</li>
               <li>{employee.phno}</li>
            </ul>
        </div>
    )
}
export default Kilji;