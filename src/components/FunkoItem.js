import { ProductWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import { Link } from "react-router-dom";

const funkoItem = ({ funko }) => {
  return (
    <>
      <ProductWrapper>
        <Link to={`/funkos/${funko.slug}`}>
          <img class="productImage" src={funko.image} alt={funko.name} />
        </Link>
        <h3 class="product-name">{funko.name}</h3>
        <h3 class="product-price">{funko.price}</h3>
        <DeleteButton funkoId={funko.id} />
      </ProductWrapper>
    </>
  );
};

export default funkoItem;
