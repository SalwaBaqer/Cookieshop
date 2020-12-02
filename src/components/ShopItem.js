import { observer } from "mobx-react";
import { Link } from "react-router-dom";

//styles
import { ProductWrapper } from "../styles";

const shopItem = ({ shop }) => {
  return (
    <>
      <ProductWrapper>
        <Link to={`/shops/${shop.slug}`}>
          <img class="productImage" src={shop.image} alt={shop.name} />
        </Link>
        <h3 class="product-name">{shop.name}</h3>
      </ProductWrapper>
    </>
  );
};

export default observer(shopItem);
