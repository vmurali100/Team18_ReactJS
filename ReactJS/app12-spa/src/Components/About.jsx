import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const About = () => {
  const [users,setUsers]=useState([]);
  const navigate  = useNavigate()
  useEffect(()=>{
    const getAllUsersFromApi=async()=>{
      const response=await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await response.json();
      setUsers(users);
    };

    getAllUsersFromApi()
  },[])

  const shoUsersDetails=(user)=>{
    console.log(user)
    navigate('aboutDetails',{state:{user}})
  }
  return (
    <div>
      <h2>Welcome to About Component !!</h2>
      <ul>
        {users.map((usr)=>{
          return <li onClick={()=>{shoUsersDetails(usr)}}>{usr.email}</li>
        })}
      </ul>
    </div>
  )
}

export default About
