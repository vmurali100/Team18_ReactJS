import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Bana3 = () => {
  const [contact, setContact] = useState({});
  const { username } = useParams();
  console.log(username);
  useEffect(() => {
    const getUser = async () => {
      const userResponse = await fetch("https://jsonplaceholder.typicode.com/users/" + username);
      const data = await userResponse.json();
      setContact(data);
    };
    getUser();
  }, []);
  return (
    <div>
      <h2>Welcome to Contact us  Details</h2>
      <ul>
        {Object.keys(contact).map((key) => {
          console.log(key);
          if (key !== "address" && key !== "company") {
            return <li>{contact[key]}</li>;
          }
        })}
      </ul>
    </div>
  );
};

export default Bana3;