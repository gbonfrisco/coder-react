import React from "react";
import "./ItemListContainer.css"

function ItemListContainer({ children, greeting, text, fondo }) {

  const fondoBack = { backgroundImage: fondo};

  return (
    <div style={fondoBack} className="Card">
      {greeting}
      <h2>{text}</h2>
      {children}
    </div>
  );
}

export default ItemListContainer;
