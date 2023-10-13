import './App.css';
import { useState } from 'react';

function App() {
  var [message,setMessage] = useState("Welcome")
  return (
    <div className="App">
     <h2>{message}</h2>
    </div>
  );
}

export default App;
