import React from "react";
import { ThemeButton, Logo } from "../styles";
import logo from "../funkologo.png";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav mr-auto">
          <ThemeButton onClick={props.toggleTheme}>
            {props.currentTheme === "light" ? "Dark" : "Light"} Mode
          </ThemeButton>
        </div>
        <ul className="navbar-nav mr-auto ml-auto">
          <il>
            <Logo to="/">
              <img src={logo} alt="logo" />
            </Logo>
          </il>
        </ul>
        <div className="navbar-nav ml-auto">
          <ThemeButton>
            <Link to="/funkos">To funkos list</Link>{" "}
          </ThemeButton>
        </div>
        <div className="navbar-nav ">
          <ThemeButton>
            <Link to="/shops">To shops list</Link>{" "}
          </ThemeButton>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
