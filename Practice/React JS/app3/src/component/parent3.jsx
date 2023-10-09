import { useState } from "react"

const Rani = () => {
    const [Message, setMessage] = useState("");
    const [Employee, setEmploee] = useState({});
    const [allEmployees, setAllEmployees] = useState([]);

    const handc = () => {
        setMessage("Welcome to the new World");
    };
    const handleShowPerson = () => {
        setEmploee({
            fname: "Raghu",
            lname: "Thulasiram",
        });
    };
    const thulasiram = () => {
        setAllEmployees(["Thulasiram", "reddy", "Mokshith"])
    }
    return (
        <div>
            <h2>welcome Employee</h2>
            <button onClick={handc}>showmessage</button>
            <h2>Welcome Meeage: {Message}</h2>
            <hr />
            <h2>Employee name Should</h2>
            <button onClick={handleShowPerson}>Show all Employees</button>
            <h3>Click here to get all the Employees:{setEmploee}</h3>
            <ul>
                <li>{Employee.fname}</li>
                <li>{Employee.lname}</li>
            </ul>
            <hr />
            <h3>List the all Employees</h3>
            <button onClick={thulasiram}>Display message</button>
            <h3>show all one: {allEmployees}</h3>
        </div>
    );
};

export default Rani;