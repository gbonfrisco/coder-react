import React, { useEffect, useState } from "react";
import data from "../Data/Data.js";
import ItemDetail from "./ItemDetail.js";

function getProduct() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data[0]), 2000);
  });
}

function ItemDetailContainer() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    getProduct().then((respuesta) => setItem(respuesta));
  }, []);

  return (
    <ItemDetail
      key={item.id}
      tittle={item.name}
      desc={item.description}
      price={item.price}
      img={item.img}
      stock={item.stock}
    />
  );
}
export default ItemDetailContainer;
