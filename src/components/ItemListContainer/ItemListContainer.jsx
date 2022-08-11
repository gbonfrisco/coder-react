import React from "react";
import "./ItemListContainer.css";
import itemsData from "../../components/Data/Data.js";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card.jsx";

function getProduct() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(itemsData), 1000);
  });
}

export default function ItemListContainer({ fondo }) {
  const fondoBack = { backgroundImage: `url(${fondo})` };

  const [data, setData] = useState([]);

  useEffect(() => {
    getProduct().then((respuesta) => setData(respuesta));
  }, []);

  return (
    <div className="card-container">
      {data.map((dataElem) => {
        return (
          <Card
            key={dataElem.id}
            tittle={dataElem.name}
            desc={dataElem.description}
            price={dataElem.price}
            img={dataElem.img}
            stock={dataElem.stock}
          />
        );
      })}
    </div>
  );
}
