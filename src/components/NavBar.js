import React from "react";
import { ThemeButton, Logo } from "../styles";
import logo from "../funkologo.png";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Logo to="/">
        <img src={logo} alt="logo" />
      </Logo>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <Link to="/funkos">To funkos list</Link>
          <ThemeButton onClick={props.toggleTheme}>
            {props.currentTheme === "light" ? "Drak" : "Light"} Mode
          </ThemeButton>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
