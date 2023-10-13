import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [statement, setStatement] = useState("Welcome to parent Component !!");
  const [student, setStudent] = useState({
    fname: "Ram",
    email: "ram@gmail.com",
  });
  const [allStudents, setAllStudents] = useState([
    "Sam",
    "Sundar",
    "Kiran",
    "Kumar",
  ]);
  return (
    <div>
      <h2>Welcome to Parent Component !!</h2>
      <hr />
      <Child 
        parentMessage={statement} 
        studentDetails = {student}
        allStudentDetails = {allStudents}
        />
    </div>
  );
};
export default Parent;


// 1. Create a Component with a String , Object And Array . Display all those data in Same Compont 
// 2. Create a Component with a String , Object And Array . Display all those data in Same Compont when we click on the Button
// 3. Create a Parent & Child Components . Pass the data from Parent to Child Component 