import logo from "./logo.svg";
import "./App.css";
import cookies from "./cookies";

const styles = {
  texts: {
    textAlign: "center",
  },

  images: { display: "block", marginLeft: "auto", marginRight: "auto" },

  ListWrapper: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    marginTop: "50px",
    marginLeft: "50px",
    marginRight: "50px",
    textAlign: "center",
  },
};

function App() {
  const cookiesList = cookies.map((cookie) => (
    <div>
      <img src={cookie.image} style={{ height: "50", width: "50" }} />
      <h2>{cookie.name}</h2>
      <h3>{cookie.price}</h3>
    </div>
  ));

  return (
    <div>
      <h1 style={styles.texts}>The Best Cookie Shop</h1>
      <h4 style={styles.texts}>A Delightful Piece of Heaven! </h4>
      <img
        src="https://lh3.googleusercontent.com/proxy/K6MGEhq7PLOh7Ev4etvYiR1WAFLCQxH1Zh7XKKLjdLoJ_8RSsdRM90afGoKDuwRXSM6fLX218QqI7pp8C7w_6nnmI4CE9DRi6hhbsSqcqSe8NjOWEbjxH4z8naET8mp3IMrMtDmr0D22qkI-yYFRZpFRIy8xrxc7UuY6"
        style={styles.images}
      />
      <div style={styles.ListWrapper}>{cookiesList}</div>
    </div>
  );
}

export default App;
