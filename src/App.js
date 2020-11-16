import "./App.css";

//from React
import { useState } from "react";
import { Route, Switch } from "react-router";

import funkos from "./funkos";

//styles
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";

//Components
import FunkoList from "./components/FunkoList";
import FunkoDetail from "./components/FunkoDetail";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

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

  const createFunko = (newFunko) => {
    const updatedFunkos = [..._funkos];
    updatedFunkos.push(newFunko);
    setFunkos(updatedFunkos);
  };

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
    <>
      <ThemeProvider theme={theme[currentTheme]}>
        <NavBar toggleTheme={toggleTheme} currentTheme={currentTheme} />
        <GlobalStyle />

        <Switch>
          {/* funkos details */}
          <Route path="/funkos/:funkoId">
            <FunkoDetail funkos={_funkos} deleteFunko={deleteFunko} />
          </Route>

          {/* funkos list */}
          <Route path="/funkos">
            <FunkoList
              funkos={_funkos}
              deleteFunko={deleteFunko}
              setFunko={setFunko}
              createFunko={createFunko}
            />
          </Route>
          {/* home page */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        {/* // {setView()} */}
      </ThemeProvider>
    </>
  );
}

export default App;
