import logo from './logo.svg';
// import './App.css';
import { Bunny } from './Components/Bunny';
import { Sample } from './Components/Sample';
import { List } from './Components/List';
import { Table } from './Components/Table';
import { Anchortag } from './Components/Anchortag';

function App() {
  return (
    <div className='App'>
    <Bunny/>
    <Sample/>
    <List/>
    <Table/>
    </div>
  );
}

export default App;
