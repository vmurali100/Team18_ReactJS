import React, { useState } from 'react'

export const Sample3 = () => {
  const [obj, setObj] = useState({
    objName: "vanitha",
    objAddress: "hghb",
    objContact: 1234565
  })
  const changeObj = () => {
    let newobj = { ...obj }
    
    newobj = {
      objName: "vcgcfg",
      objAddress: "aaaa",
      objContact: 1234565
    }
    setObj(newobj)
  }
  return (
    <div>
      <ul>
        {Object.values(obj).map((o) => {
          return <li>{o}</li>

        })}
      </ul>
      <button onClick={changeObj}>Change Obj</button>
    </div>
  )
}

