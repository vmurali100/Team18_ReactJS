import logo from './logo.svg';
import './App.css';
import { Form1 } from './components/Form1';
import {ShanthiClass } from './components/ClassComponent';
import { ShanthiFunction } from './components/FunctionComponent';
import { ShanthiArrow } from './components/FunctionArrow';

function App() {
  return (
    <div className="App">
      {/* <Form1/> */}
      <ShanthiClass/>
      {/* <ShanthiFunction/> */}
      {/* <ShanthiArrow/> */}
    </div>
  );
}

export default App;
