import logo from './logo.svg';
import './App.css';
import { NewPerson, Person } from './ClassComponents/ClassPerson';
import Student from './ClassComponents/ClassStudent'; // Importing Default Component 
import { Parent } from './ClassComponents/ParentClass';
import WithoutCallback from './WithoutCallback';
import WithCallback from './WithCallback';

function App() {
  return (
    <div className="App">
     {/* <Parent/> */}
     {/* <Person/>
     <Student/>
     <NewPerson/> */}
     {/* <Parent/> */}
     {/* <WithoutCallback/> */}
     <WithCallback/>
    </div>
  );
}

export default App;
