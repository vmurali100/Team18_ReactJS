import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'

const UserDetails = () => {
    // const info = useLocation();
    const {state:{user}} = useLocation();


  return (
    <div>
      <h2>Welcome to User Details Page !!</h2>
      <ul>
        {
            Object.keys(user).map(key=>{
                if(key !== 'address' && key !== 'company')
                return <li>{user[key]}</li>
            })
        }
      </ul>
    </div>
  )
}

export default UserDetails
