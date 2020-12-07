import React from "react";
import { useState } from "react";
import { AuthButtonStyled } from "../../styles";
import SignUpModal from "../modals/SignUpModal";

const SignupButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <AuthButtonStyled onClick={openModal}>Sign up</AuthButtonStyled>
      <SignUpModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default SignupButton;
