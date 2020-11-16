import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { observer } from "mobx-react";

//style
import { DetailWrapper, GoBack } from "../styles";

//buttons
import DeleteButton from "./buttons/DeleteButton";

//store
import funkoStore from "../stores/funkoStore";

const FunkoDetail = () => {
  const { funkoSlug } = useParams();
  const funko = funkoStore.funkos.find((_funko) => {
    console.log(_funko.slug);
    console.log(funkoSlug);
    return _funko.slug === funkoSlug;
  });

  if (!funko) return <Redirect to="/funkos" />;

  return (
    <>
      <DetailWrapper>
        <h2>{funko.name}</h2>
        <img src={funko.image} alt={funko.name} />
        <h3>Description: </h3>
        <h4>{funko.description}</h4>
        <h3>Price: {funko.price}</h3>
      </DetailWrapper>
      <DeleteButton funkoId={funko.id} />
    </>
  );
};

export default observer(FunkoDetail);
