import { observer } from "mobx-react";
import { Link } from "react-router-dom";

//styles
import { ProductWrapper } from "../styles";

//buttons
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";

const funkoItem = ({ funko }) => {
  return (
    <>
      <ProductWrapper>
        <Link to={`/funkos/${funko.slug}`}>
          <img class="productImage" src={funko.image} alt={funko.name} />
        </Link>
        <h3 class="product-name">{funko.name}</h3>
        <h3 class="product-price">{funko.price} KD</h3>
        <UpdateButton funko={funko} />
        <DeleteButton funkoId={funko.id} />
      </ProductWrapper>
    </>
  );
};

export default observer(funkoItem);
