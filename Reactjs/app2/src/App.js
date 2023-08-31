import logo from './logo.svg';
import './App.css';
import {Janvi} from './Janvi'
import {Kavya} from './Kavya'
import { Incheon } from './Incheon';
import { Busan } from './Busan';

function App() {
  return (
    <div>
      <Janvi name ={ name1:"Cran1",}/>
      <Kavya/>
      <Incheon/>
      <Busan/>
    </div>
  );
}

export default App;
