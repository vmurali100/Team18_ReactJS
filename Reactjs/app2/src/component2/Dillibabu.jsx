import { useState } from "react"
import { Mokshajna } from "./Mokshajna"




export const Dillibabu =()=>{
  const [name,setName]=useState("ramu")
  const[email,setEmail]=useState("123@email")
  const[phone,setPhone]=useState(64165746)
  const[reddy,setReddy]=useState("thulasi")
 const nattu=()=>{
  setName("ragu")
  setEmail("456@gmail.com")
  setPhone(658465545364665846)
  setReddy("mmmmmm")
 }
    return <div>

      <button onClick={nattu}>addudser</button>
        <h2>this is parent component</h2>
      <Mokshajna name={name} phone={phone} email={email} reddy={reddy}/>
      
    </div>
    
}