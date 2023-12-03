import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

const Contact = () => {
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
      <h2>Welcome to Contact Us Component</h2>
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

export default Contact
