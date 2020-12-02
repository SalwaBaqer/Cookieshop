import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { observer } from "mobx-react";

//style
import { DetailWrapper } from "../styles";

//store
import shopStore from "../stores/shopStore";

const ShopDetail = () => {
  const { shopSlug } = useParams();
  const shop = shopStore.shops.find((_shop) => {
    console.log(_shop.slug);
    console.log(shopSlug);
    return _shop.slug === shopSlug;
  });

  if (!shop) return <Redirect to="/shops" />;

  return (
    <>
      <DetailWrapper>
        <h2>{shop.name}</h2>
        <img src={shop.image} alt={shop.name} />
      </DetailWrapper>
    </>
  );
};

export default observer(ShopDetail);
