import "./App.css";
import { useState } from "react";
import funkos from "./funkos";

//styles
import {
  GlobalStyle,
  Title,
  Description,
  ShopImage,
  ThemeButton,
} from "./styles";
import { ThemeProvider } from "styled-components";

//Components
import FunkoList from "./components/FunkoList";
import FunkoDetail from "./components/FunkoDetail";

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

  const setView = () => {
    if (funko)
      return (
        <FunkoDetail
          funko={funko}
          setFunko={setFunko}
          deleteFunko={deleteFunko}
        />
      );
    else
      return (
        <FunkoList
          funkos={_funkos}
          deleteFunko={deleteFunko}
          setFunko={setFunko}
        />
      );
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

      <Title>The Funko POP Shop</Title>
      <Description>Just one more POP</Description>
      <ShopImage
        src="https://s3.amazonaws.com/gt7sp-prod/decal/24/42/21/5116090282781214224_1.png"
        alt="Funko logo"
      />
      {setView()}
    </ThemeProvider>
  );
}

export default App;
