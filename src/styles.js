import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

//Global style for the page
export const GlobalStyle = createGlobalStyle`
body{
    color:${(props) => props.theme.mainColor};
    background: ${(props) => props.theme.backgroundColor};

    p{
      text-align: center;
    }


}
`;

//Logo
export const Logo = styled(Link)`
  img {
    width: 100px;
  }
`;

export const UpdateButtonStyled = styled.button`
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  display: block;

  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

export const CreateButtonStyled = styled.button`
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};

  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

//to highlight the text in search result
export const Searchtext = styled.span`
  .product-name {
    background-color: #ff9;
    color: #555;
  }
`;

//search bar
export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

//the theme button from dark to light and....
export const ThemeButton = styled.button`
  font-size: 0.85em;
  padding: 0.5em 2em;
  border-radius: 3px;
  margin-left: 2px;
  margin-right: 2px;
  border-color: ${(props) => props.theme.blue};
  background-color: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.backgroundColor};
`;

//Go back to the list button
export const GoBack = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.5em 2em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.mainColor};
`;

//delete item
export const DeleteItemStyled = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  width: 25px;
  height: 25px;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Description = styled.h4`
  text-align: center;
`;

export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  height: 250px;
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
`;

export const ProductWrapper = styled.div`
  margin: 10px;
  border-style: solid;
  border-width: 2px;
  border-color: ${(props) => props.theme.itemBorder};
  border-radius: 5px;
  .productImage {
    border-bottom-style: solid;
    border-width: 2px;
    border-color: ${(props) => props.theme.itemBorder};
    width: 300px;
    height: 300px;
    object-fit: cover;
  }
  h3 {
    text-align: center;
    color: ${(props) => props.theme.blue};
  }
  .product-price {
    color: ${(props) => props.theme.blue};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

export const DetailWrapper = styled.div`
  img {
    display: block;
    width: 25%;
    margin-left: auto;
    margin-right: auto;
    border-style: solid;
    border-width: 2px;
    border-color: ${(props) => props.theme.itemBorder};
    object-fit: cover;
  }
  h1,
  h2,
  h3,
  h4 {
    display: block;
    width: 25%;
    margin-left: auto;
    margin-right: auto;
    color: ${(props) => props.theme.blue};
  }
`;

export const AuthButtonStyled = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  margin-left: 0.5em;
  border-radius: 3px;
  border-color: ${(props) => props.theme.blue};
  background-color: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.backgroundColor};
`;
