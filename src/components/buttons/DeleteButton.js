import React from "react";
import { DeleteItemStyled } from "../../styles";

const DeleteButton = (props) => {
  const funkoId = props.funkoId;
  const handleDelete = () => {
    props.deleteFunko(funkoId);
  };

  return (
    <DeleteItemStyled
      src="https://lh3.googleusercontent.com/proxy/1JQ4A8wdPjbH_hY-uiRlpv5NPgvdxYuuLhuPpTEEHJ42Sz-E2UkDH_4BwSmWnT1ZJfXT6uMj-q_zv1GrKguwHyoorbk6dSY9cKHLAFZq_49ZKWB2pA9-IRLLB8JCG4ZziQA-"
      alt="Delete"
      onClick={handleDelete}
    />
  );
};

export default DeleteButton;
