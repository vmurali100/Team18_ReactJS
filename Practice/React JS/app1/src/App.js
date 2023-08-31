import logo from './logo.svg';
import './App.css';
import { Ram } from './Ram';
import { Thulasi } from './Components/Thulasi';
import { Students } from './Components/Students';
import { Lavanya } from './Components/Lavanya';

function App() {
  return (
    <div className="App">

      <Ram />
      <hr />
      <Thulasi />
      <hr />
      <Students />
      <hr />
      <Lavanya />
      <hr /><br />
    </div>
  );
}

export default App;
