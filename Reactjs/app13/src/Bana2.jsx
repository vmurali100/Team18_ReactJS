import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';


export default function Bana2() {
  const [contacts,setContacts]=useState([]);

  useEffect(()=>{
    const getAllContacts=async ()=>{
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await response.json();
      console.log(users)
      setContacts(users)
    }
    getAllContacts()
  },[])
  return (
    <div>
        <h1>Contact  US Component</h1>
        <ul>
        {contacts.map((contact)=>{
          return <li>
            <Link to={`${contact.id}`}>{contact.name}</Link>
          </li>
        })}
      </ul>
    </div>
  )
}
