import { useState } from "react";

export default function Student3(){
    const[message,setmessage]=useState("Hi...This is from Reactjs")
    const[User,setUser]=useState({
        fname:"vanitha",
        lname:"reddy",
        email:"vanitha@123",
        phno:9603519132,
        state:"Andhrapradesh"
    });
    const[Student,setStudent] = useState([
        "abcdef",
        "dfghjh",
        "hgtrrhbj",
        "bnmchyg"
    ])
    return(
        <div>
            <h2>{message}</h2>
            <hr/>
            <ul>
                {Object.values(User).map((val)=>{
return<li>{val}</li>
                })}
            </ul>
            <hr/>
            <ul>
                {Student.map((Students) =>{
                    return<li>{Students}</li>
                })}
            </ul>
        </div>
    )
}