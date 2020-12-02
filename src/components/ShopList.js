import { useState } from "react";
import { observer } from "mobx-react";

// Style
import { ListWrapper, Title } from "../styles";

//Components
import ShopItem from "./ShopItem";
import SearchBar from "./SearchBar";
// import AddButton from "./AddButton";

//store
import shopStore from "../stores/shopStore";

const ShopList = () => {
  const [query, setQuery] = useState("");

  const filteredShops = shopStore.shops.filter((shop) =>
    shop.name.toLowerCase().includes(query.toLowerCase())
  );

  const shopsList = filteredShops.map((shop) => (
    <ShopItem shop={shop} key={shop.id} />
  ));
  return (
    <>
      <Title>Shops</Title>
      <SearchBar setQuery={setQuery} />
      {/* <AddButton /> */}

      <ListWrapper> {shopsList}</ListWrapper>
    </>
  );
};

export default observer(ShopList);
