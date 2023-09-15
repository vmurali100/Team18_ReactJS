import { useState } from "react";
import { Yeosu } from "./Yeosu";


const Ulsan = () => {
    const [empName, setEmpname] = useState("SADDY");
    const [age, setAge] = useState(54);
    const [email, setmail] = useState("SADDY@gmail.com");
    const [phno, setPhno] = useState(9494494949);
    const [user, setUser] = useState({});
    const [users, setUsers] = useState([]);

    const changeEmpName = () => {
        setEmpname("sanvi");
        setAge(32);
        setmail("Sanvi@gmail.com");
        setPhno("0448385924");
    }

    const addUserDetails = () => {
        setUser({
            fname: "Ramya",
            lname: "krishna"
        })
    }
    const addusers = () => {
        setUsers(["Ravi", "Kiran", "Kumar"])
    }
    return (
        <div>
            <h2>Welcome to Company Component</h2>
            <button onClick={changeEmpName}>Change</button><br></br>
            <button onClick={addUserDetails}>Add User Details</button> <br />
            <button onClick={addusers}>Add Users</button>
            <Yeosu empName={empName} age={age} email={email} phno={phno} user={user} users={users} />


        </div>
    );
}
export default Ulsan;