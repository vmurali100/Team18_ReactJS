import React, { useState } from 'react'

export const Sample1 = () => {

    //  variable........
    const[myName,setMyName]=useState("vanitha");
// Object.....
    const[obj,setObj]=useState({
        objName:"vanitha",
        objAddree:"clx",
        objSalary:4567

    })

    // Array...

    const[arr,setArr]=useState([
        "vanitha","dfghj",4567
    ])
    


const changeName=()=>{
    setMyName("vvvvvv")
}


const changeObj=()=>{
  let  newObj={...obj}

  newObj={
    objName:"bbbb",
    objAddree:"ertyu",
    objSalary:9876
  }
  setObj(newObj)
}



  return (
    <>
        {/* <h1>welcome to javascript</h1>
        <h2>hsvyusfy</h2>
        <button onClick={changeName}>Change Name</button>
      <h1> {myName}</h1>  */}

<ul>
    {Object.values(obj).map((o)=>{
        return  <li>{o}</li>
       
    })}
</ul>

<button onClick={changeObj}>Change Obj</button>


<ul>
    {arr.map((a)=>{
        return <li>{a}</li>
    })}
</ul>

        </>
 
  )
}
