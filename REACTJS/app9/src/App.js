import logo from './logo.svg';
import './App.css';
import Table from './Components/Table';
import Timetable from './Components/Timetable';
import Attributes from './Components/Attributes';
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
