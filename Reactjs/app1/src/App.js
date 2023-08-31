import logo from './logo.svg';
import './App.css';
import { Student } from './Components/Student';
import { Employee } from './Components/Employee';
import { Mokshith } from './Components/Mokshith';
import { Mokshajna } from './Components/Mokshajna';
import {Vanitha} from './Components/Vanitha'
import { Dilli } from './Components/Dilli';
import { Thulasi } from './Components/Thulasi';




function App() {
  return (
    <div className="App">
      <Student/>
      <hr/>
      <Employee/>
      <hr/>
      <Mokshith/>
      <hr/>
      <Mokshajna/>
      <hr/>
      <Vanitha/>
      <hr/>
   <Dilli/>
   <Thulasi/>
    </div>
  );
}

export default App;
