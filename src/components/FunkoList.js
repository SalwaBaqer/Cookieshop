import { useState } from "react";
import { observer } from "mobx-react";

// Style
import { ListWrapper } from "../styles";

//Components
import FunkoItem from "./FunkoItem";
import SearchBar from "./SearchBar";
import AddButton from "./AddButton";

//store
import funkoStore from "../stores/funkoStore";

const FunkoList = () => {
  const [query, setQuery] = useState("");

  const filteredFunkos = funkoStore.funkos.filter((funko) =>
    funko.name.toLowerCase().includes(query.toLowerCase())
  );

  const funkosList = filteredFunkos.map((funko) => (
    <FunkoItem funko={funko} key={funko.id} />
  ));
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <AddButton />

      <ListWrapper> {funkosList}</ListWrapper>
    </>
  );
};

export default observer(FunkoList);
