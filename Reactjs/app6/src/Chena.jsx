import { useState } from "react";

function Baau (){
    const[message,setmessage]=useState("")
    const[student,setstudent]=useState([])
    const[employee,setemployee]=useState({})
    const handlemsg=()=>{
        setmessage("Hello React");
    };
    const handleStudents=()=>{
        setstudent(["Naveen","Polisheetty"])
    }
    const handleemp=()=>{
        setemployee({ 
            name:"anuska",
            mail:"anu3094@gmail.com",
        })
    }
    return(
        <div> 
            <h2>Welocome to the React world !!</h2>
            <button onClick={handlemsg}>Show Details</button>
            <h2>{message}</h2>
            <br />
            <button onClick={handleStudents}>Show students</button>
            <ul>
                {student.map((val)=>{
                    return <li>{val}</li>
                })}
            </ul>
            <h2>Show Employee details</h2>
            <button onClick={handleemp}>Click</button>
            <ul>
               <li>{employee.name}</li>
               <li>{employee.mail}</li>
            </ul>
        </div>
    )
}
export default Baau;