import logo from './logo.svg';
import './App.css';
import { Sample1 } from './components/Sample1';
import ClassComponent from './components/ClassComponent';
import { Sample2 } from './components/Sample2';
import { Sample3 } from './components/Sample3';

function App() {
  return (
    <div className="App">
      {/* <Sample1/> */}
      {/* <ClassComponent/> */}
      {/* <Sample2/> */}
      <Sample3/>
    </div>
  );
}

export default App;
