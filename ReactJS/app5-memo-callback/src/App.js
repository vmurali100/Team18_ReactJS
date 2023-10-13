import logo from './logo.svg';
import './App.css';
import Count from './Count';
import { useState } from 'react';
import Button from './Button';

function App() {
  const [age,setAge] = useState(25);
  const [salary,setSalary] = useState(50000)
  const incrementAge=()=>{
    setAge(age+1)
  }

  const incrementSalary=()=>{
    setSalary(salary+1000)
  }
  return (
    <div className="App">
      <Count text="Age" count={age}/>
      <Button handleClick={incrementAge}> Increment Age</Button> <hr/>
      <Count text="Salary" count={salary}/>
      <Button handleClick={incrementSalary}>Increment Salary</Button>
   
    </div>
  );
}

export default App;
