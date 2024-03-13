import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Students = () => {
  const [studentsDetails, setStudentsDetails] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3200/users").then((response) => {
      console.log(response.data);
      setStudentsDetails(response.data);
    });
   
  }, []);
  return (
    <div>
      <h2>Welcome to Students Component !!!</h2>
      <ul>
        {studentsDetails.map((std, i) => {
          return (
            <li key={i}>
              <Link to={`${std.id}`}>{std.fname}</Link>
            </li>
          );
        })}
      </ul>
      <Outlet/>
    </div>
  );
};

export default Students;