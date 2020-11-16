import { BsPlusCircle } from "react-icons/bs";
import FunkoModal from "./modals/FunkoModal";
import { useState } from "react";
const AddButton = ({ createFunko }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <BsPlusCircle className="float-right" size="2em" onClick={openModal} />
      <FunkoModal
        isOpen={isOpen}
        closeModal={closeModal}
        createFunko={createFunko}
      />
    </>
  );
};

export default AddButton;
