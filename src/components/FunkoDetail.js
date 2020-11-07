import React from "react";
import { DetailWrapper, GoBack } from "../styles";
import DeleteButton from "./buttons/DeleteButton";

const FunkoDetail = (props) => {
  const funkoprop = props.funko;

  const handleDelete = (funkoId) => {
    props.deleteFunko(funkoId);
    props.setFunko();
  };
  return (
    <>
      <GoBack onClick={() => props.setFunko(null)}>Funko List </GoBack>
      <DetailWrapper>
        <h1>{funkoprop.name}</h1>
        <img src={funkoprop.image} alt={funkoprop.name} />
        <h3>Description: {funkoprop.description}</h3>
        <h3>Price: {funkoprop.price}</h3>
      </DetailWrapper>
      <DeleteButton funkoId={funkoprop.id} deleteFunko={handleDelete} />
    </>
  );
};

export default FunkoDetail;
