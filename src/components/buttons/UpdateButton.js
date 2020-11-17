import React from "react";
import { useState } from "react";

//button
import { UpdateButtonStyled } from "../../styles";

import FunkoModal from "../modals/FunkoModal";

const UpdateButton = ({ funko }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      <FunkoModal isOpen={isOpen} closeModal={closeModal} oldFunko={funko} />
    </>
  );
};

export default UpdateButton;
