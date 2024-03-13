import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home';
import { Contact } from './Components/Contact';
import { About } from './Components/About';
import { Navbar } from './Components/Navbar';
import { Pagenotfound } from './Components/Pagenotfound';

function App() {
  return (
    <div className="App">
       <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/students" element={<Students />}>
            <Route path=":id" element={<StudentsDetails />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
