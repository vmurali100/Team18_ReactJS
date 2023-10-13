import { useState } from "react"
import Ganesh from "./Ganesh";

const Shiva = () => {
    const[messages,setmessages]=useState("")
    const[employee,setemployee]=useState({})
    const[student,setstudent]=useState([])
    const def=()=>{
        setmessages("Welcome ganesh")
    }
    const ghi=()=>{
        setemployee({
            fname:"vanitha",
            lname:"reddy"
        })
    }
    const jkl=()=>{
        setstudent(["kavya","anitha","anjali"])
    }
return(
    <div>
        <button onClick={def}>show message</button><br />
        <button onClick={ghi}>show student</button><br />
        <button onClick={jkl}>show message</button>
        <Ganesh msg={messages} emp={employee} stu={student}/>
    </div>
);
};
export default Shiva;

