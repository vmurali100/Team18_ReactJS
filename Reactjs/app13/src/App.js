import logo from './logo.svg';
import './App.css';
// import { Sample1 } from './components/Sample1';
// import ClassComponent from './components/ClassComponent';
// import { Sample2 } from './components/Sample2';
// import { Sample3 } from './components/Sample3';
// import Example2 from './components/Example2';
// import ArrayIteratorComponent from './components/Example3';
// import MyComponent from './components/Example4';
// import ClassComponent from './Example5';
// import CComponent from './Example5';
import Example1 from '../src/components/Example1';
import { Example6 } from './components/Example6';



function App() {
  return (
    <div className="App">
      <Example1/>
      {/* <Sample1/> */}
      {/* <ClassComponent/> */}
      {/* <Sample2/> */}
      {/* <Sample3/> */}
      {/* <Example2/>
      <ArrayIteratorComponent/>
      <MyComponent/>
      <CComponent/> */}
      <Example6/>
      
    </div>
  );
}

export default App;
