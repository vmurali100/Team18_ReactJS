import { useState } from "react";

function Baau (){
    const[message,setmessage]=useState("Hello React")
    const[student,setstudent]=useState(["Naveen","Polisheetty"])
    const[employee,setemployee]=useState({
        name:"anuska",
        mail:"anu3094@gmail.com",
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
               <li>{employee.name}</li>
               <li>{employee.mail}</li>
            </ul>
        </div>
    )
}
export default Baau;