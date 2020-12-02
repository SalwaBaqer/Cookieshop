import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { observer } from "mobx-react";

//style
import { DetailWrapper } from "../styles";

//component
import FunkoList from "./FunkoList";

//button
import AddButton from "./AddButton";

//store
import shopStore from "../stores/shopStore";
import funkoStore from "../stores/funkoStore";

const ShopDetail = () => {
  const { shopSlug } = useParams();
  const shop = shopStore.shops.find((_shop) => {
    console.log(_shop.slug);
    console.log(shopSlug);
    return _shop.slug === shopSlug;
  });

  if (!shop) return <Redirect to="/shops" />;
  const funkosFromStore = shop.funkos.map((funko) =>
    funkoStore.getFunkosById(funko.id)
  );
  return (
    <>
      <DetailWrapper>
        <h2>{shop.name}</h2>
        <img src={shop.image} alt={shop.name} />
      </DetailWrapper>
      <AddButton shop={shop} />
      <FunkoList funkosprop={funkosFromStore} />
    </>
  );
};

export default observer(ShopDetail);
