import logo from './logo.svg';
import './App.css';
import { Table } from './Components/Table';
import { Attributes } from './Components/Attributes';
import { Timetable } from './Components/Timetable';

function App() {
  return (
    <div className="App">
      <Table/>
      <Attributes/>
      <Timetable/>
    </div>
  );
}

export default App;
