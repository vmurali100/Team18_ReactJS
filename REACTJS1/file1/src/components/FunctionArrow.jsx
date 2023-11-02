import { useState } from "react"

export const ShanthiArrow=()=>{

// var myName="shanthi"  // variable decleration in js.
// var myobj={
//     myName:"shanthi",
//         myAddress:"Chittoor",
//         mySalary:1230000
// }


    var[myName,setMyName]=useState("Shanthi")// variable declerarion in react 

    var [mySubjects,setMySubjects]=useState(["html","css","js","react","redux"])

    var[myObect,setMyObject]=useState({
        myName:"shanthi",
        myAddress:"Chittoor",
        mySalary:1230000
    })


 var changeName=()=>{
    setMyName("ssss")
 }

    return <div>
        {/* <h1>Iam from arrow frunction...</h1> */}

<h1>My Name is : {myName} </h1>


<button onClick={changeName}>Change Name</button>
<hr />

{
    mySubjects.map((sub)=>{
        return <li>{sub}</li>
    })
}

<hr />

{Object.values(myObect).map((ob)=>{
    return <li>{ob}</li>
})}

    </div>
}
m