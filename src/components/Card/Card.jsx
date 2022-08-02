
import Button from "../Button/Button";
import ItemCount from "../ItemCount/ItemCount";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.data.imgurl} alt="img" />
      </div>
      <div className="card-detail">
        <h2>{props.data.name}</h2>
        <span>{props.data.description}</span>
        <h3>{props.data.price}</h3>
        {/* <Button type="buy" text="Comprar"/> */}
        <ItemCount initial={1} stock={20}/>
      </div>
    </div>
  );
}

export default Card;
