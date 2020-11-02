import logo from "./logo.svg";
import "./App.css";
import styles from "./styles";

import CookieList from "./components/CookieList";

function App() {
  return (
    <div>
      <h1 style={styles.texts}>The Best Cookie Shop</h1>
      <h4 style={styles.texts}>A Delightful Piece of Heaven! </h4>
      <img
        src="https://cookienameddesire.com/wp-content/uploads/2015/11/nutella-stuffed-cookies-red-velvet-recipe.jpg"
        style={styles.images}
        alt="cookie image"
      />
      <div style={styles.ListWrapper}>
        <CookieList />
      </div>
    </div>
  );
}

export default App;
