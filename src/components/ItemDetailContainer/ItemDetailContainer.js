import React, { useEffect, useState } from 'react'
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


  console.log(item)
  return (
    <div>
    {item.map((dataElem) => {
      return (
        <ItemDetail
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
  )
}

export default ItemDetailContainer;