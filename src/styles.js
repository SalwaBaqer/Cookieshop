import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    color:${(props) => props.theme.mainColor};
    background: ${(props) => props.theme.backgroundColor};
}
`;

const Title = styled.h1`
  text-align: center;
`;

const Description = styled.h4`
  text-align: center;
`;

const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  size: 40%;
`;

const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
`;

const ProductWrapper = styled.div`
  margin: 10px;
  border-style: solid;
  border-width: 4px;
  border-color: ${(props) => props.theme.itemBorder};
  border-radius: 5px;
  img {
    border-bottom-style: solid;
    border-width: 4px;
    border-color: ${(props) => props.theme.itemBorder};
    width: 300px;
    hieght: 300px;
    object-fit: cover;
  }

  h3 {
    text-align: center;
  }

  .product-price {
    color: ${(props) => props.theme.blue};
  }
`;

export {
  GlobalStyle,
  Title,
  Description,
  ShopImage,
  ListWrapper,
  ProductWrapper,
};
