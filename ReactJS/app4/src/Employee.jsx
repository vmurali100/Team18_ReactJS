import { useState } from "react";

const Employee = () => {
  const [message, setMessage] = useState("");
  const [employee, setEmploee] = useState({});
  const [allEmployees, setAllEmployees] = useState([]);

  const handleClick = () => {
    setMessage("Welcome to ReactJS Component Topic");
  };

  const handleShowPerson = () => {
    setEmploee({
      fname: "Raghu",
      lname: "Ram",
    });
  };

  const handleShowAllEmployees = ()=>{
    setAllEmployees(["Ram","Sam","Sundar","Kiran"])
  }
  return (
    <div>
      <h2>Welcome to Employee Component !!</h2>
      <button onClick={handleClick}>Show Message</button>
      <h2>Welcome Message is : {message}</h2> <hr />
      <button onClick={handleShowPerson}>Show Person</button>
      <ul>
        <li>{employee.fname}</li>
        <li>{employee.lname}</li>
      </ul>
      <hr />
      <button onClick={handleShowAllEmployees}>Show All Employees</button>
      <ul>
        {allEmployees.map((emp)=>{
            return <li>{emp}</li>
        })}
      </ul>
    </div>
  );
};

export default Employee;
