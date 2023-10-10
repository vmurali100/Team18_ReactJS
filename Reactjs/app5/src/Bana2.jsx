import { useState } from "react"

function Jiji (){
        const[message,setmessage]=useState("Welcome to the React world")
        const[student,setstudent]=useState(["Deepthi","Gayathri","Suman","Viswek"])
        const[employee,setemployee]=useState({
            name:"Kiara",
            mail:"kiarasid@gmail.com",
            phno:"7888932923"
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
                   <li>{employee.phno}</li>
                </ul>
            </div>
        )
}
export default Jiji;