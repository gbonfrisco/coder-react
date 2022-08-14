import React from 'react'
import Card from "../Card/Card.jsx"

function ItemList({products}) {
  return (
    <div className='card-container'> 
        {products.map((dataElem) => {
        return (
          <Card
            key={dataElem.id}
            id={dataElem.id}
            tittle={dataElem.name}
            desc={dataElem.description}
            price={dataElem.price}
            img={dataElem.img}
            stock={dataElem.stock}
          />
        );
      })}</div>
  )
}

export default ItemList