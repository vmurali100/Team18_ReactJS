import { useState } from "react"
import { Etr } from "./Etr"

export const Esr = () => {
    const [name, setName] = useState("Ram")
    const [email, setEmail] = useState("reddy")
    const thulasiram = () => {
        setName("vanitha")
        setEmail("ram@gmail.com")
    }
    return <div>
        <button onClick={thulasiram}>add user</button>
        <h1>thulasiram</h1>
        <Etr name={name} email={email} />
    </div>
}