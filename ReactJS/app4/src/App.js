import logo from "./logo.svg";
import "./App.css";
// import Student from "./Student";
import { useState } from "react";
import Person from "./Person";
// import Employee from "./Employee";
import Parent from "./Components/Parent";
import Demo from "./Components/Demo";
import DemoComp from "./Components/DemoComp";
import Student from "./ClassComponents/Student";
import Employee from "./ClassComponents/Employee";
import Users from "./ClassComponents/Users";

function App() {
  var [person, setPerson] = useState("Welcome to ReactJS"); // Creating a State

  // var [firstNum,secondNum,thirdNum] = giveNumbers();
  const changeMessage=()=>{
    setPerson("I am changed By Button ");
    let i =0;
    setInterval(()=>{
      setPerson("I am changed By Button "+i);
      i++
    },2000)
  }
  return (
    <div>
      <Users/>
      {/* <Employee/> */}
      {/* <Student/> */}
      {/* <button onClick={changeMessage}>Change Message</button> */}
      {/* <h2>{person}</h2> */}
      {/* <DemoComp/> */}
      {/* <Demo/> */}
      {/* <Parent/> */}
      {/* <Employee/> */}
      {/* displaying the State Variables  */}
      {/* <h2>{person}</h2> */}
      {/* <Person/> */}
    </div>
  );
}

export default App;
