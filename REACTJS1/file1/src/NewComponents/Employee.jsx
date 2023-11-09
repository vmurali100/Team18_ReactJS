import React, { useState } from "react";

export const Employee = () => {
  const [heading, setheading] = useState("Iam a money magnet");
  const [employee, setemployee] = useState({
    employeename: "shanthi",
    salary: "500000",
  });
  const [courses, setcourses] = useState(["HTML", "CSS", "js", "RJS"]);
  return (
    <div>
      <h1>I am a software engineer</h1>
      <p>{employee.employeename}</p>
      <p>{employee.salary}</p>
      
        {courses.map((val) => {
          return <p>{val}</p>;
        })}
     
    </div>
  );
};
