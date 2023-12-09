import logo from './logo.svg';
import './App.css';
import Bana from './Bana';
import Bana1 from './Bana1';
import Bana2 from './Bana2';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Bana3 from './Bana3';

function App() {
  return (
    <div className="App">
     <h1>Header</h1>
     <hr></hr>
     <Router>
     <ul>
      <li><Link to={''}>Home</Link></li>
      <li><Link to={'gallery'}>Gallery</Link></li>
      <li><Link to={'contact'}>Contactus</Link></li>
      <li><Link to={'contactdetails'}>Contact Details</Link></li>
     </ul>
      <Routes>
        <Route path="/" element={<Bana/>}/>
        <Route path="/gallery"  element={<Bana1/>}/>
        <Route path="/contact"  element={<Bana2/>}/>
        <Route path="/contact/:id" element={<Bana3/>}/>
      </Routes>
     </Router>
    <hr></hr>
    <h1>Footer</h1>
    </div>
  );
}

export default App;

