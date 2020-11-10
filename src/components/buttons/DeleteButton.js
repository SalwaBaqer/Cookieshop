import React from "react";
import { DeleteItemStyled } from "../../styles";

const DeleteButton = (props) => {
  const funkoId = props.funkoId;
  const handleDelete = () => {
    props.deleteFunko(funkoId);
  };

  return (
    <DeleteItemStyled
      src="https://lh3.googleusercontent.com/proxy/H-JCMUKeB-pJ8D_aRueeeSbz38ZtZN1eny4EjJj1yiEgR35hVy8RDUmpCnqfb1rdeDBydgtffv7jiZoahCS8PpMg6TLzeGD9XTMC3aFILGGVPrAxTomFNOCl9f87KGapH2aA"
      alt={<p>Delete item</p>}
      onClick={handleDelete}
    />
  );
};

export default DeleteButton;
