import React from "react";
import { useState } from "react";
import ChildCom from "./ChildCom";

const ParentComp = () => {
  const [message, setMessage] = useState("Hello from Parent Component !!!");
  return (
    <div>
      <h2>Welcome to Parent Component !</h2>
      
      <hr />

      <ChildCom newMsg={message} render={setMessage}/>
    </div>
  );
};

export default ParentComp;