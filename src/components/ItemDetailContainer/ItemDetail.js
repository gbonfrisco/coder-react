
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import {useContext} from "react";
import {cartContext} from "../../store/cartContext";
import { Link } from "react-router-dom";


function ItemDetail({id, tittle, desc, price, img, stock}) {

  const [quantityInCart, setquantityInCart] = useState(0);
  const {addToCart} = useContext(cartContext);

  function handleAdd(count){
    console.log("Agregar al carrito", count);
   setquantityInCart(count);
   const item = {key: id,id,tittle,desc,price,img,stock}
   addToCart(item, count); 
  }
  


  return (
    <div className="card-itemDetail">
      <div className="card-img">
        <img src={img} alt="img" />
      </div>
      <div className="card-detail">
        <h2>{tittle}</h2>
        <span>{desc}</span>
        <h3>${price}</h3>
        <ItemCount 
        initial={1} 
        stock={stock} 
        onAdd={handleAdd} 
        value={quantityInCart}
        />
        {quantityInCart !== 0?
          <Link to="/cart">Ir al carrito</Link>
          :<></>
          }
      </div>
    </div>
  );
}

export default ItemDetail;
