import { useState } from "react";
import { Yeosu } from "./Yeosu";

export const Ulsan=()=>{
    const [empName,setEmpname] = useState("SADDY");
    const [age,setAge]=useState(54);
    const [email,setmail]=useState("SADDY@gmail.com")
    const [phno,setPhno]=useState(9494494949);
    const [user,setUser] = useState({});
    const [users,setUsers]=useState([])
   
    const changeEmpName=()=>{
        setEmpname("sanvi");
        setAge("32");
        setmail('Sanvi@gmail.com')
        setPhno("0448385924");
    }
    
    const addUserDetails=()=>{
        setUser({
            fname:"Ramya",
            lname:"krishna"
        })
    }
    const addusers=()=>{
        setUsers(["Ravi","Kiran","Kumar"])
    }
    return <div>
        <h2>Welcome to Company Component</h2>
        <button onClick={changeEmpName}>Change</button>
        <button onClick={addUserDetails}>Add User Details</button> <br />
        <button onClick={addusers}>Add Users</button>
        <Yeosu empname ={empName} age ={age} mail={email} phno={phno}/>
        <Yeosu empname ={"ramya"} age ={21} mail={"ramya@gamil.com"}/>
        <Yeosu empname ={"sravya"} age ={29} mail={"sravya@gamil.com"}/>
        <Yeosu empname ={"anjali"} age ={28} mail={"anjali@gamil.com"}/>
    </div>
}

