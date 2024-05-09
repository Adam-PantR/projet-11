function Items(props) {
  return (
    <div className="feature-item">
      <img
        // src="../img/icon-money.png"
        src={props.src}
        // alt="Chat Icon"
        alt={props.alt}
        className="feature-icon"
      />
      <h3 className="feature-item-title">{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default Items;
