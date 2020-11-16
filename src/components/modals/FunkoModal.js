import Modal from "react-modal";
import { useState } from "react";
import { CreateButtonStyled } from "../../styles";

const FunkoModal = ({ isOpen, closeModal, createFunko }) => {
  const [funko, setFunko] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
  });
  const handleChange = (event) => {
    setFunko({ ...funko, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createFunko(funko);
    closeModal();
  };

  const handleCancel = (event) => {
    event.preventDefault();

    closeModal();
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Funko Modal"
    >
      <form>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={handleChange}
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label>Price</label>
            <input
              type="number"
              min="6.5"
              className="form-control"
              name="price"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            name="description"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            type="text"
            className="form-control"
            name="image"
            onChange={handleChange}
          />
        </div>
        <CreateButtonStyled onClick={() => handleSubmit}>
          Create
        </CreateButtonStyled>
        <CreateButtonStyled onClick={() => handleCancel}>
          Cancel
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default FunkoModal;
