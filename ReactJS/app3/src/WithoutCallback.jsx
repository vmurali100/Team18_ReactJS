import React from "react";
import { useState } from "react";

const WithoutCallback = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = (buttonLabel) => {
    // This function is recreated on every render
    console.log(`Button ${buttonLabel} clicked!`);
    setCount(count + 1);
  };
  function Button(props) {
    const { onClick, label } = props;
    return <button onClick={() => onClick(label)}>{label}</button>;
  }
  return (
    <div>
      <Button onClick={handleButtonClick} label="A" />
      <Button onClick={handleButtonClick} label="B" />
      <p>Count: {count}</p>
    </div>
  );
};

export default WithoutCallback;
