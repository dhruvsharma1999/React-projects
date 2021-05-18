import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  /*
    Button style function
    array.prototype.includes() - is a method that determines weather an array includes a certain values among it's enteries or not return a boolean
    buttonStyle - by default buttonStyle will be implementer, if style not mention, The first elemet of STYLES array 
    */
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonStyle : SIZES[0];
  return (
    <Link to="/sign-up" className="btn-mobile">
      <button
        className={`btn ${checkButtonSize} ${checkButtonStyle}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
