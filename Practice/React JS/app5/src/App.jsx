import logo from './logo.svg';
import './App.css';
import { Lasttable } from './Components/lasttable';
import { Secondtable } from './Components/Secondtable';
import { Firsttable } from './Components/Firsttable';


function App() {
  return (
    <div>
      <Lasttable />
      <hr />
      <hr />
      <Secondtable />
      <hr />
      <Firsttable />
      <hr />
    </div>
  );
};

export default App;
