import React, { useState } from "react";

export const Practice = () => {
  const [welcome, setwelcome] = useState("my reactjs project");
  const [object, setobject] = useState({
    fname: "",
    lname: "",
  });

  const [array, setarray] = useState(["HTML", "CSS", "JS", "Reactjs"]);
  return (
  <div>
    <p>welcome to reactjs</p>
    <p>{welcome}</p>
    <p>{object.fname}</p>
    <p>{object.lname}</p>

    <p>
      {array.map((val) => {
        return <p>{val}</p>;
      })}
    </p>
  </div>
);
};

