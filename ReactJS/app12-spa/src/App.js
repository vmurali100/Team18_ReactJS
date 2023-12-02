import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h2>I am  Common For All </h2>
      <hr/>
      {/* <Home />
      <About />
      <Gallery />
      <Contact /> */}
      <Router>
        <ul>
        <li><Link to={''}>Home</Link></li>
        <li><Link to={'about'}>About</Link></li>
        <li><Link to={'contact'}>Contact</Link></li>
        <li><Link to={'gallery'}>Gallery</Link></li>
          
        </ul>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
