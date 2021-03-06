import { useState } from "react";

import { BsPlusCircle } from "react-icons/bs";
import FunkoModal from "./modals/FunkoModal";

const AddButton = ({ shop }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <BsPlusCircle className="float-right" size="2em" onClick={openModal} />
      <FunkoModal isOpen={isOpen} closeModal={closeModal} shop={shop} />
    </>
  );
};

export default AddButton;
