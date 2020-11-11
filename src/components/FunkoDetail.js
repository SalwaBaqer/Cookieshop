import React from "react";
import { DetailWrapper, GoBack } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import { Redirect, useParams } from "react-router-dom";

const FunkoDetail = (props) => {
  const funkoId = useParams().funkoId;

  const funko = props.funkos.find((_funko) => _funko.slug === funkoId);

  if (!funko) return <Redirect to="/funkos" />;

  const handleDelete = (funkoId) => {
    props.deleteFunko(funkoId);
  };
  return (
    <>
      <DetailWrapper>
        <h2>{funko.name}</h2>
        <img src={funko.image} alt={funko.name} />
        <h3>Description: </h3>
        <h4>{funko.description}</h4>
        <h3>Price: {funko.price}</h3>
      </DetailWrapper>
      <DeleteButton funkoId={funko.id} deleteFunko={handleDelete} />
    </>
  );
};

export default FunkoDetail;
