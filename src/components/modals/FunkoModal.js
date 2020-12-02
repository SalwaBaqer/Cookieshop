import Modal from "react-modal";
import { useState } from "react";

//style
import { CreateButtonStyled } from "../../styles";

//store
import funkoStore from "../../stores/funkoStore";

const FunkoModal = ({ isOpen, closeModal, oldFunko, shop }) => {
  console.log(oldFunko);
  const [funko, setFunko] = useState(
    oldFunko ?? {
      name: "",
      price: 0,
      description: "",
      image: "",
    }
  );
  const handleChange = (event) => {
    setFunko({ ...funko, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    funkoStore[oldFunko ? "updateFunko" : "createFunko"](funko, shop);
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
              value={funko.name}
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
              value={funko.price}
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
            value={funko.description}
            type="text"
            className="form-control"
            name="description"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            value={funko.image}
            type="text"
            className="form-control"
            name="image"
            onChange={handleChange}
          />
        </div>
        <CreateButtonStyled onClick={handleSubmit}>
          {oldFunko ? "Update" : "Create"}
        </CreateButtonStyled>
        <CreateButtonStyled
          onClick={() => {
            closeModal();
          }}
        >
          Cancel
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default FunkoModal;
