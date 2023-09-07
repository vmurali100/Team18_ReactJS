import Employee from "./Employee";
import { useState } from "react";

export const Company=()=>{
    const [empName,setEmpName] = useState("Ram Kumar ....");
    const [age,setAge]=useState(24);
    const [email,setEmail]=useState("Ram@gmail.com")
    // useState Hook 
    // var empName = "Ravi Kumar";

    const changeEmpName=()=>{
        // empName = "Raghu Ram"
        setEmpName("Raghu Ram");
        setAge("43");
        setEmail('RRRR@gmail.com')
    }
    return <div>
        <h2>Welcome to Company Component !!</h2>
        <button onClick={changeEmpName}>Change Emp Name </button>
        <Employee empName ={empName} age ={age} email={email}/>
        <Employee empName ={"Ravi Krisna"} age ={24} email={"ram@gamil.com"}/>
        <Employee empName ={"Sam Sundar"} age ={24} email={"ram@gamil.com"}/>
        <Employee empName ={"Sanjay Krisna"} age ={24} email={"ram@gamil.com"}/>
    </div>
}