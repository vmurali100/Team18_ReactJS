import { useState } from "react"

function  Viraj (){
    const[message,setmessage]=useState("Technonova Hackathon")
    const[student,setstudent]=useState(["Nivea","rithvika","jevsree","payal","kunal","vamsi"])
    const[mng,setmng]=useState("First Place Secured by")
    const[employee,setemployee]=useState({
        fname:"payal",
        rno:"106782"
    })
    return(
        <div>
            <h2>{message}</h2>
            <ul>
                {student.map((val)=>{
                    return <li>{val}</li>
                })}
            </ul>
            <h2>{mng}</h2>
            <ul>
                <li>{"fullname : " +"   "+employee.fname}</li>
                <li>{"Rollno:"+employee.rno}</li>
            </ul>
        </div>
    )
}
export default Viraj;