import funkos from "../funkos";
import { ListWrapper } from "../styles";
import FunkoItem from "./FunkoItem";

const FunkoList = () => {
  const funkosList = funkos.map((funko) => <FunkoItem funkoObject={funko} />);
  return <ListWrapper> {funkosList}</ListWrapper>;
  // style={styles.ListWrapper}
};

export default FunkoList;
