import funkos from "../funkos";
import { ListWrapper } from "../styles";
import FunkoItem from "./FunkoItem";
import SearchBar from "./SearchBar";
import { useState } from "react";

const FunkoList = () => {
  const [query, setQuery] = useState("");

  const filteredFunkos = funkos.filter((funko) => {
    if (funko.name.toLowerCase().includes(query.toLowerCase())) {
      return true;
    } else return false;
  });

  const funkosList = filteredFunkos.map((funko) => (
    <FunkoItem funkoObject={funko} key={funko.id} />
  ));
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper> {funkosList}</ListWrapper>
    </>
  );
};

export default FunkoList;
