import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ContactDetails = () => {
  const [contact, setContact] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const getSingleUser = async () => {
      const userResponse = await fetch(
        "https://jsonplaceholder.typicode.com/users/" + id
      );
      const data = await userResponse.json();
      setContact(data);
    };
    getSingleUser();
  }, []);
  return (
    <div>
      <h2>Welcome to Contact Details</h2>
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

export default ContactDetails;
