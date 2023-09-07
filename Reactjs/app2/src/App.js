import logo from './logo.svg';
import './App.css';
import Jaga from './component1/jaga';
import { Vanitha } from './components/Vanitha';
import Ramu from './component1/ramu';
import { Dillibabu } from './component2/Dillibabu';

function App() {
  return (
    <div className="App">
     <Vanitha/>
     <Ramu/>
     <Jaga/>
     <Dillibabu/>
    </div>
  );
}

export default App;
