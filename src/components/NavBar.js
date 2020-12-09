//from react
import React from "react";
import { AiOutlineLogout } from "react-icons/ai";

import logo from "../funkologo.png";
import { Link } from "react-router-dom";

//style
import { ThemeButton, Logo } from "../styles";

//buttons
import SignupButton from "./buttons/SignupButton";
import SigninButton from "./buttons/SigninButton";

//store
import authStore from "../stores/authStore";

//observer
import { observer } from "mobx-react";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav mr-auto">
          {authStore.user ? (
            <>
              <h3>hello {authStore.user.username}</h3>
              <AiOutlineLogout
                size="2em"
                color="red"
                onClick={authStore.signout}
              />
            </>
          ) : (
            <>
              <SignupButton />
              <SigninButton />
            </>
          )}
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
        <div className="navbar-nav">
          <ThemeButton onClick={props.toggleTheme}>
            {props.currentTheme === "light" ? "Dark" : "Light"} Mode
          </ThemeButton>
        </div>
      </div>
    </nav>
  );
};

export default observer(NavBar);
