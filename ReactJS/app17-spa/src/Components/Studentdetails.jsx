import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const StudentsDetails = () => {
  const [student, setStudent] = useState({});
  const location = useLocation();
  console.log(location);
  const userId = location.pathname.split("/")[2];

  useEffect(() => {
    getStudentDetails();
  }, [userId]);

  const getStudentDetails=()=>{
    axios.get("http://localhost:3200/users/" + userId).then((response) => {
      console.log(response.data);
      setStudent(response.data);
    });
  }
  return (
    <div>
      <h2>Welcome to Student Details</h2>
      <ul>
        <li>{student.fname}</li>
        <li>{student.email}</li>
        <li>{student.gender}</li>
      </ul>
    </div>
  );
};

export default StudentsDetails;