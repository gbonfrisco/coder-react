import React from "react";
import "./ItemListContainer.css";
import itemsData from "../../components/Data/Data.js";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "../ItemList/ItemList";

function getProduct() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(itemsData), 1000);
  });
}

export default function ItemListContainer({ fondo }) {
  

  const [data, setData] = useState([]);

  useEffect(() => {
    getProduct().then((respuesta) => setData(respuesta));
  }, []);

  return (
    // <div className="card-container">
  <ItemList products={data}>  
  </ItemList>
  );
}
