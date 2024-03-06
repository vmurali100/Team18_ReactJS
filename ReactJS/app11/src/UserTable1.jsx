import { useState } from "react";

export function UserTable() {
    const [User, setUser] = useState({
        fname: "",
        lname: "",
        email: "",
    })
    const [Users, setUsers] = useState([
        { fname: "vanitha", lname: "reddy", email: "vanitha@123" },
        { fname: "babu", lname: "reddy", email: "babu@123" },
        { fname: "mokshith", lname: "reddy", email: "mokshith@123" }
    ])
    const [index, setIndex] = useState(null);
    const handlechange = (e) => {
        const newUser = { ...User };
        newUser[e.target.name] = e.target.value
        setUser(newUser)
    };
    const handleAdduser = () => {
        const newUsers = { ...User };
        newUsers.push(User)
        setUsers(newUsers)
        clearform()
    }
    const handleDelete = (usr, i) => {
        console.log(i)
       const newusers={...User};
       newusers.splice(i,1);
       setUsers(newusers);
    }
   const clearform = () =>{
    setUser({
        fname:"",
        lname:"",
        email:"",
    })
   }
   const handleupdate = () =>{
    const newusers={...User}
    
   }
}