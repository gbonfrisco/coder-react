import React, { useEffect, useState } from "react";
import data from "../Data/Data.js";
import ItemDetail from "./ItemDetail.js";
import { useParams } from "react-router-dom";



function ItemDetailContainer() {
  const [item, setItem] = useState({});

  const idURL = useParams().id;

  function getProduct() {
    return new Promise((resolve, reject) => {

      let itemRequested = data.find( elemento => elemento.id == idURL )
      setTimeout(() => resolve(itemRequested), 1000);
    });
  }

  useEffect(() => {
    getProduct().then((respuesta) => setItem(respuesta));
  }, []);

  return (
    <ItemDetail
      key={item.id}
      id={item.id}
      tittle={item.name}
      desc={item.description}
      price={item.price}
      img={item.img}
      stock={item.stock}
    />
  );
}
export default ItemDetailContainer;
