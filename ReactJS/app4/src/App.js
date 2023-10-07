import logo from "./logo.svg";
import "./App.css";
import Student from "./Student";
import { useState } from "react";
import Person from "./Person";
import Employee from "./Employee";

function App() {
  var [person, setPerson] = useState("Welcome to ReactJS"); // Creating a State

  // var [firstNum,secondNum,thirdNum] = giveNumbers();
  return (
    <div>
      <Employee/>
      {/* displaying the State Variables  */}
      {/* <h2>{person}</h2> */}
      {/* <Person/> */}
    </div>
  );
}

export default App;
