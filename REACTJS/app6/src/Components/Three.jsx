import { useState } from "react"

export const Three=()=>{
    const[name,setname]=useState("Jaga")
const[email,setemail]=useState("Jaga@123")
const puli=()=>{
    setname("Guna")
    setemail("Guna@13234")
}
return <div>
        <h5>This is Pulicherla GunaReddy</h5>
<button onClick={puli}>change</button>
    <h2>Name:{name} Email:{email}</h2>
    </div>
}