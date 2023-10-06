import logo from "./logo.svg";
import "./App.css";
import Student from "./Student";
import { useState } from "react";

function App() {
  var [person, setPerson] = useState("Welcome to ReactJS"); // Creating a State

  // var [firstNum,secondNum,thirdNum] = giveNumbers();
  return (
    <div>
      {/* displaying the State Variables  */}
      <h2>{person}</h2>
    </div>
  );
}

export default App;
