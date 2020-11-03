import "./App.css";
import { GlobalStyle, Title, Description, ShopImage } from "./styles";
import FunkoList from "./components/FunkoList";
import { ThemeProvider } from "styled-components";

const theme = {
  mainColor: "#00BFFF",
  backgroundColor: "#F5FFFA",
  blue: "#191970",
  itemBorder: "#D3D3D3",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
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
