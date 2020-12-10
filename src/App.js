import "./App.css";
import { observer } from "mobx-react";
//from React
import { useState } from "react";

//styles
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";

//Components
import Routes from "./components/Routes";
import NavBar from "./components/NavBar";

//store
import funkoStore from "./stores/funkoStore";
import shopStore from "./stores/shopStore";

const theme = {
  light: {
    mainColor: "#00BFFF",
    backgroundColor: "white",
    blue: "#191970",
    itemBorder: "#00BFFF",
  },

  dark: {
    mainColor: "white",
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
        {funkoStore.loading || shopStore.loading ? (
          <h1>Loading...</h1>
        ) : (
          <Routes />
        )}
      </ThemeProvider>
    </>
  );
}

export default observer(App);
