import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);

  const changeMessage = () => {
    setMessage("Welcome to ReactJS Training ...");
  };

  const addUserDetails = () => {
    setUser({
      fname: "Ram",
      lname: "krishna",
    });
  };

  const addusers = () => {
    setUsers(["Ravi", "Kiran", "Kumar"]);
  };
  return (
    <div>
      <h2>Welcomet to Parent Component</h2>
      <button onClick={changeMessage}>Change Message</button> <br />
      <button onClick={addUserDetails}>Add User Details</button> <br />
      <button onClick={addusers}>Add Users</button>
      <Child message={message} user={user} users={users} />
    </div>
  );
};

export default Parent;
