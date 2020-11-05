import { ProductWrapper } from "../styles";
const funkoItem = (props) => {
  return (
    <ProductWrapper>
      <img src={props.funkoObject.image} alt={props.funkoObject.name} />
      <h3 class="product-name">{props.funkoObject.name}</h3>
      <h3 class="product-price">{props.funkoObject.price}</h3>
    </ProductWrapper>
  );
};

export default funkoItem;
