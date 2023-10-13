import React, { useState, useCallback } from 'react';

function Button(props) {
  const { onClick, label } = props;

  // Use useCallback to memoize the onClick function
  const handleClick = useCallback(() => {
    onClick(label);
  }, [onClick, label]); // Only recreate the function if onClick or label change

  return (
    <button onClick={handleClick}>
      {label}
    </button>
  );
}

function WithCallback() {
  const [count, setCount] = useState(0);

  const handleButtonClick = useCallback((buttonLabel) => {
    // This function will only be recreated if count changes
    console.log(`Button ${buttonLabel} clicked!`);
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <Button onClick={handleButtonClick} label="A" />
      <Button onClick={handleButtonClick} label="B" />
      <p>Count: {count}</p>
    </div>
  );
}

export default WithCallback;
