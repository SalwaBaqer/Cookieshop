import "./App.css";
import {
  GlobalStyle,
  Title,
  Description,
  ShopImage,
  ThemeButton,
} from "./styles";
import FunkoList from "./components/FunkoList";
import { ThemeProvider } from "styled-components";
import { useDtate, useState } from "react";

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
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () => {
    if (currentTheme === "light") setCurrentTheme("dark");
    else setCurrentTheme("light");
  };

  const changeTheme = (currentTheme) => {
    if (currentTheme === "light") return "Dark";
    else return "Light";
  };

  let ThemeButtonText = changeTheme(currentTheme);
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>{ThemeButtonText}</ThemeButton>
      {/* ma y9er decrement()  yro7 ynady el function before I click (mo hatha ely Abeh)*/}
      {/* onClick takheth function onClick={() => what ever i want} */}

      <Title>The Funko POP Shop</Title>

      <Description>Just one more POP</Description>

      <ShopImage
        src="https://s3.amazonaws.com/gt7sp-prod/decal/24/42/21/5116090282781214224_1.png"
        alt="Funko logo"
      />

      <FunkoList />
    </ThemeProvider>
  );
}

export default App;
