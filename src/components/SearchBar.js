import React from "react";

//from styles
import { SearchBarStyled, Searchtext } from "../styles";

const highlightSearch = (query) => {};
const SearchBar = (props) => {
  return (
    <Searchtext>
      <SearchBarStyled
        placeholder="Search for a funko"
        onChange={(event) => {
          props.setQuery(event.target.value);
        }}
      />
    </Searchtext>
  );
};
export default SearchBar;
