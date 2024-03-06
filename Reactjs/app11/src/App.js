import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { Gallery } from './Gallery';
import { Contact } from './Contact';
import About from './About';
import{BrowserRouter as Router,Link,Route,Routes} from "react-router-dom";
import UserCRUD from './Usertable';

function App() {
  return (
    <div className="App">
      <UserCRUD/>
    </div>
  );
}

export default App;
