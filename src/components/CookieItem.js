const CookieItem = (props) => {
  return (
    <div>
      <img src={props.cookieObject.image} alt={props.cookieObject.name} />
      <h2>{props.cookieObject.name}</h2>
      <h3>{props.cookieObject.price}</h3>
    </div>
  );
};

export default CookieItem;
