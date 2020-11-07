import { useState } from "react";

// Style
import { ListWrapper } from "../styles";

//Components
import FunkoItem from "./FunkoItem";
import SearchBar from "./SearchBar";

const FunkoList = (props) => {
  const [query, setQuery] = useState("");

  const filteredFunkos = props.funkos.filter((funko) => {
    if (funko.name.toLowerCase().includes(query.toLowerCase())) {
      return true;
    } else return false;
  });

  const funkosList = filteredFunkos.map((funko) => (
    <FunkoItem
      funko={funko}
      setFunko={props.setFunko}
      deleteFunko={props.deleteFunko}
      key={funko.id}
    />
  ));
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper> {funkosList}</ListWrapper>
    </>
  );
};

export default FunkoList;
