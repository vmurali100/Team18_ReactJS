import React, { useState } from "react";

export const form2 = () => {
  const [form, setform] = useState({
    fname: "",
    lname: "",
  });
  const handleChange = (e) => {
    var inputname = e.target.name;
    var newform = { ...form };
    newform[inputname] = e.target.value;
    setform(newform);
  };

  return (
    <div>
      <form action="">
        <label htmlFor="">fname:</label>
        <input
          type="text"
          name="fname"
          value={form.fname}
          onChange={handleChange}
        />
        <label htmlFor="">lname:</label>
        <input
          type="text"
          name="lname"
          id=""
          value={form.lname}
          onChange={handleChange}
        />
        <button type="button">submit</button>
      </form>
    </div>
  );
};
