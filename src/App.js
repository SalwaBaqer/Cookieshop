import "./App.css";

//from React
import { useState } from "react";
import ReactDOM from "react-dom";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";

import funkos from "./funkos";

//styles
import { GlobalStyle, ThemeButton } from "./styles";
import { ThemeProvider } from "styled-components";

//Components
import FunkoList from "./components/FunkoList";
import FunkoDetail from "./components/FunkoDetail";
import Home from "./components/Home";

const theme = {
  light: {
    mainColor: "#00BFFF",
    backgroundColor: "#F5FFFA",
    blue: "#191970",
    itemBorder: "#00BFFF",
  },

  dark: {
    mainColor: "#00BFFF",
    backgroundColor: "#191970",
    blue: "#F5FFFA",
    itemBorder: "#00BFFF",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light"); //theme state
  const [funko, setFunko] = useState(null); //srach state
  const [_funkos, setFunkos] = useState(funkos); //delete state

  //Delete method
  const deleteFunko = (funkoid) => {
    const updatedFonkos = _funkos.filter((funko) => funko.id !== funkoid);
    setFunkos(updatedFonkos);
  };

  const toggleTheme = () => {
    if (currentTheme === "light") setCurrentTheme("dark");
    else setCurrentTheme("light");
  };
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>
        {currentTheme === "light" ? "Drak" : "Light"} Mode
      </ThemeButton>

      <Switch>
        {/* funkos details */}
        <Route path="/funkos/:funkoId">
          <Link to="/funkos">Back to funkos</Link>
          <FunkoDetail funkos={_funkos} deleteFunko={deleteFunko} />
        </Route>

        {/* funkos list */}
        <Route path="/funkos">
          <Link to="/">To Home page</Link>
          <FunkoList
            funkos={_funkos}
            deleteFunko={deleteFunko}
            setFunko={setFunko}
          />
        </Route>
        {/* home page */}
        <Route path="/">
          <Link to="/funkos">To funkos list</Link>
          <Home />
        </Route>
      </Switch>

      {/* // {setView()} */}
    </ThemeProvider>
  );
}

export default App;
