import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBeer, FaTypo3, FaTimes, FaBars } from "react-icons/fa";
import Button from "./Button";
import "./Navbar.css";

const style = { color: "white" };

const Navbar = () => {
  const [click, setClick] = useState(false); //state change to toggle from T -> F and vis-a-versa
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            TRVL <FaTypo3 />
          </Link>
          {/* setting state for times and bars icon to change the icon view when toggled */}
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes style={style} /> : <FaBars style={style} />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
