import "./App.css";

//from React
import { useState } from "react";
import { Route, Switch } from "react-router";

//styles
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";

//Components
import FunkoList from "./components/FunkoList";
import ShopList from "./components/ShopList";
import FunkoDetail from "./components/FunkoDetail";
import ShopDetail from "./components/ShopDetail";
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

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <>
      <ThemeProvider theme={theme[currentTheme]}>
        <NavBar toggleTheme={toggleTheme} currentTheme={currentTheme} />
        <GlobalStyle />

        <Switch>
          <Route path="/shops/:shopSlug">
            <ShopDetail />
          </Route>
          <Route path="/shops">
            <ShopList />
          </Route>
          <Route path="/funkos/:funkoSlug">
            <FunkoDetail />
          </Route>

          <Route path="/funkos">
            <FunkoList />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
