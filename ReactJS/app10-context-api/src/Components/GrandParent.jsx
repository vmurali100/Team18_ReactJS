import React from "react";
import { useState } from "react";
import MyContext from "./MyContext";
import Parent from "./Parent";

const GrandParent = () => {
  const [allUsers, setAllUsers] = useState(["Ram", "Ravi", "Sam", "Sundar"]);

  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "John Smith",
      position: "Software Engineer",
      department: "Engineering",
      salary: 80000,
    },
    {
      id: 2,
      name: "Jane Doe",
      position: "Marketing Manager",
      department: "Marketing",
      salary: 75000,
    },
    {
      id: 3,
      name: "Michael Johnson",
      position: "Financial Analyst",
      department: "Finance",
      salary: 70000,
    },
    {
      id: 4,
      name: "Emily Davis",
      position: "Human Resources Specialist",
      department: "Human Resources",
      salary: 65000,
    },
    {
      id: 5,
      name: "Robert Brown",
      position: "Sales Representative",
      department: "Sales",
      salary: 60000,
    },
  ]);
  return (
    <div>
      <MyContext.Provider value={employees}>
        <h2>Welcome to Grand Parent Component</h2>
        <hr />

        <Parent allUsers={allUsers} />
      </MyContext.Provider>
    </div>
  );
};

export default GrandParent;
