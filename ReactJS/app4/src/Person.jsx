import { useState } from "react";

const Person = () => {
  const [message, setMessage] = useState("Welcome to Person Component !!");
  const [students, setStudents] = useState([
    "Ram",
    "Ravi",
    "Sam",
    "Kiran",
    "Kumar",
  ]);
  const [person, setPerson] = useState({
    fname: "Ram",
    lname: "Krishna",
  });

  return (
    <div>
      <h2>{message}</h2>
      <ul>
        {students.map((val) => {
          return <li>{val}</li>;
        })}
      </ul>
      <hr />

      {/* <ul>
        <li>{person.fname}</li>
        <li>{person.lname}</li>
        </ul> */}

      <ul>
        {Object.values(person).map((objVal) => {
          return <li>{objVal}</li>;
        })}
      </ul>
    </div>
  );
};
export default Person;
