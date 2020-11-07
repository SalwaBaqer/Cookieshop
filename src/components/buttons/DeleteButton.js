import React from "react";
import { DeleteItemStyled } from "../../styles";

const DeleteButton = (props) => {
  const funkoId = props.funkoId;
  const handleDelete = () => {
    props.deleteFunko(funkoId);
  };

  return (
    <DeleteItemStyled
      src="https://lh3.googleusercontent.com/proxy/_PbqfqSL8xaq6xbyvT_0qSWXB96A-nqEEcTivsuqwMN--Cj_UOTQVH6agB95mrxF6bTpQyUakG5D1KRles3QzlxcF6T8mw7MVjq6adjOiXJ8IreDp-fYUEmoSWT2m8y_OI1s"
      alt={<p>Delete item</p>}
      onClick={handleDelete}
    />
  );
};

export default DeleteButton;
