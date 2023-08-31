import logo from "./logo.svg";
import { Employee } from "./Components/Employee";
import { Student } from "./Parent";
import { Company } from "./Components/Company";
function App() {
  return (
    <div className="App">
      <h2>Hello React </h2>
      <Company/>
      {/* <Student/> */}
      {/* <Parent/> */}
      {/* <Student/>
    <Employee/> */}
    </div>
  );
}

export default App;
