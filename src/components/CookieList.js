import cookies from "../cookies";
import styles from "../styles";
import CookieItem from "./CookieItem";

const CookieList = () => {
  const cookiesList = cookies.map((cookie) => (
    <CookieItem cookieObject={cookie} />
  ));
  return <div style={styles.ListWrapper}> {cookiesList}</div>;
};

export default CookieList;
