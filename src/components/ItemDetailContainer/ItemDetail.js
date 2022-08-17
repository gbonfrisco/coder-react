
import Button from "../Button/Button";
import ItemCount from "../ItemCount/ItemCount";
// import "./Card.css";

function ItemDetail({tittle, desc, price, img, stock}) {

  function handleAdd(count){
    console.log("Agregar al carrito", count);
    //acá guardar el count en un estado - setState.
  }



  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt="img" />
      </div>
      <div className="card-detail">
        <h2>{tittle}</h2>
        <span>{desc}</span>
        <h3>{price}</h3>
        {/* <Button type="buy" text="Comprar"/> */}
        <ItemCount initial={1} stock={stock} onAdd={handleAdd} />
      </div>
    </div>
  );
}

export default ItemDetail;
