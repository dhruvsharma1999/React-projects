import React from "react";
import Button from "./Button";

const Header = ({ title, onToggle, showForm }) => {
  //Header component to render the header and task adding functionality
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        text={showForm ? "Close" : "Add"}
        color={showForm ? "red" : "green"}
        onClick={onToggle}
      />
    </header>
  );
};

export default Header;
