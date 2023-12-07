import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { Gallery } from './Gallery';
import { Contact } from './Contact';
import About from './About';
import{BrowserRouter as Router,Link,Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Header</h1>
      <hr/>
      <Router>
<ul>
  <li><Link to={''}>Home</Link></li>
  <li><Link to={'gallery'}>Gallery</Link></li>
  <li><Link to={'contact'}>Contact</Link></li>
  <li><Link to={'about'}>About</Link></li>
</ul>

        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/gallery"  element={<Gallery/>}/>
          <Route path="/contact"  element={<Contact/>}/>
          <Route path="/about"  element={<About/>}/>  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
