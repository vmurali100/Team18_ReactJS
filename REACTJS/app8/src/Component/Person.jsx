import React, { useState } from 'react'
import { Child } from './Child'

export const Person = () => {
    const [name,setName]=useState("Welcome to Reactjs")
    const [about,setAbout]=useState({
        fname:"bangalore",
        lname:"yogananda"
    })

  return (
    <div>
        <h1>{name}</h1>
        <Child Jaga={name} myself={about}/>
        
    </div>
  )
}


