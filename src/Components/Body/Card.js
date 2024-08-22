import "./Card.css";

const Card = ({ jewelData }) => {
  return (
    <div className="card">
      <img className="card-image" alt="Jewellery" src={jewelData.img} />
      <h1 className="card-title">{jewelData.itemName}</h1>
      <h1 className="card-price">{jewelData.itemPrice}</h1>
      <button className="card-button">Add to card</button>
    </div>
  );
};

export default Card;
