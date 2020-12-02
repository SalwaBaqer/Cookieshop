import { useState } from "react";
import { observer } from "mobx-react";

// Style
import { ListWrapper } from "../styles";

//Components
import FunkoItem from "./FunkoItem";
import SearchBar from "./SearchBar";

const FunkoList = ({ funkosprop }) => {
  const [query, setQuery] = useState("");

  const filteredFunkos = funkosprop.filter((funko) =>
    funko.name.toLowerCase().includes(query.toLowerCase())
  );

  const funkosList = filteredFunkos.map((funko) => (
    <FunkoItem funko={funko} key={funko.id} />
  ));
  return (
    <>
      <SearchBar setQuery={setQuery} />

      <ListWrapper> {funkosList}</ListWrapper>
    </>
  );
};

export default observer(FunkoList);
