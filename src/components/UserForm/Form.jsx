import React, { useState } from "react";

function Form({cart}) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    telefono: "",
  });


let total = 0;
cart.forEach(item => total += item.price * item.quantity);

const ordenDeCompra = {
  buyer: {...userData},
  items: [...cart],
  total: 0
}


  function handleSubmit(e) {
    e.preventDefault();
    setUserData({
      name: "",
      email: "",
      telefono: "",
    });
  }

  function inputChangeHandler(e) {
    const input = e.target;
    let copyUserData = { ...userData };
    copyUserData[input.name] = input.value;
    setUserData(copyUserData);
  }

  function handleReset(e) {
    setUserData({
      name: "",
      email: "",
      telefono: "",
    });
  }


  return (
    <div className="form-container">
      <form onReset={handleReset} onSubmit={handleSubmit}>
        <div className="form-item">
          <label htmlFor="name">Nombre</label>
          <input
            value={userData.name}
            onChange={inputChangeHandler}
            name="name"
            type="text"
            placeholder="Nombre"
          />
        </div>

        <div className="form-item">
          <label htmlFor="telefono">Telefono</label>
          <input
            value={userData.telefono}
            onChange={inputChangeHandler}
            name="telefono"
            type="text"
            placeholder="Telefono"
          />
        </div>

        <div className="form-item">
          <label htmlFor="email">Email</label>
          <input
            value={userData.email}
            onChange={inputChangeHandler}
            name="email"
            type="text"
            placeholder="Correo"
          />
        </div>

        <div>
          <button type="submit">Enviar</button>
          <button type="reset">Cancelar</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
