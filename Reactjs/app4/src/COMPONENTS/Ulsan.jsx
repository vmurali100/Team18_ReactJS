import { useState } from "react";
import { Yeosu } from "./Yeosu";

export const Ulsan=()=>{
    const [empName,setEmpName] = useState("SADDY");
    const [age,setAge]=useState(54);
    const [email,setEmail]=useState("SADDY@gmail.com")
   
    const changeEmpName=()=>{
        setEmpName("sanvi");
        setAge("32");
        setEmail('Sanvi@gmail.com')
    }
    
    return <div>
        <h2>Welcome to Company Component</h2>
        <button onClick={changeEmpName}>Change</button>
        <Yeosu empName ={empName} age ={age} email={email}/>
        <Yeosu empName ={"ramya"} age ={21} email={"ramya@gamil.com"}/>
        <Yeosu empName ={"sravya"} age ={29} email={"sravya@gamil.com"}/>
        <Yeosu empName ={"anjali"} age ={28} email={"anjali@gamil.com"}/>
    </div>
}