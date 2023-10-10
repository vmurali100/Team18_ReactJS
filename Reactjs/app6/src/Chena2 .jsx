import { useState } from "react"

function Jiji (){
        const[message,setmessage]=useState("")
        const[student,setstudent]=useState([])
        const[employee,setemployee]=useState({})
        const handleclick=()=>{
            setmessage("Welcome to the React world")
        }
        const handlestu=()=>{
            setstudent(["Deepthi","Gayathri","Suman","Viswek"])
        }
        const handleemp=()=>{
            setemployee({
                name:"Kiara",
                mail:"kiarasid@gmail.com",
                phno:"7888932923"
            })
        }
        return(
            <div> 
                <button onClick={handleclick}>Click</button>
                <h2>{message}</h2>
            <button onClick={handlestu}>Branches</button>
                <ul>
                    {student.map((val)=>{
                        return <li>{val}</li>
                    })}
                </ul>
                <button onClick={handleemp}>Contact info</button>
                <ul>
                   <li>{employee.name}</li>
                   <li>{employee.mail}</li>
                   <li>{employee.phno}</li>
                </ul>
            </div>
        )
}
export default Jiji;