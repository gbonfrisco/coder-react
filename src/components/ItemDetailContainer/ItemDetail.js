
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

function ItemDetail({tittle, desc, price, img, stock}) {

  const [quantityInCart, setquantityInCart] = useState(0);

  function handleAdd(count){
    console.log("Agregar al carrito", count);
    setquantityInCart(count);
  }
  


  return (
    <div className="card-itemDetail">
      <div className="card-img">
        <img src={img} alt="img" />
        <p>Texto texto texto</p>
        {/* Esta descripcion irá como parte de data.js */}
      </div>
      <div className="card-detail">
        <h2>{tittle}</h2>
        <span>{desc}</span>
        <h3>${price}</h3>
        <ItemCount 
        initial={1} 
        stock={stock} 
        onAdd={handleAdd} 
        />
        {quantityInCart !== 0?
          <a href="/cart">Ir al carrito</a>
          :<></>
          }
      </div>
    </div>
  );
}

export default ItemDetail;
