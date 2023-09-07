import logo from './logo.svg';
import './App.css';
import { Janvi } from './Components/Janvi'
import { Kavya } from './Components/Kavya'
import { Incheon } from './Components/Incheon';
import { Busan } from './Components/Busan';

function App() {
  return (
    <div className="App">
      <Incheon />
      <Busan />
      <Kavya />
      <Janvi />
    </div>
  );
}

export default App;
