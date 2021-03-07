import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("random value");

  const handleClick = () => {
    setText("Hello World");
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        Change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
