import React, { useState } from "react";
import { getDocs, collection, addDoc, query, where, writeBatch, documentId } from "firebase/firestore";
import { useNavigate } from 'react-router-dom'
import firestoreBD from "../../services/firestore";
import "./Form.css";

function Form({cart}) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    telefono: "",
  });

  let navigate = useNavigate();
  const [orderFirebase, setOrderFirebase] = useState({
    id: '',
    complete: false,
  });


let total = 0;
cart.forEach(item => total += item.price * item.quantity);

const Buyorder = {
  buyer: {...userData},
  items: [...cart],
  total: total,
  date: new Date(),
}


  async function handleSubmit(e) {
    e.preventDefault();
    const collectionRef = collection(firestoreBD, "orders");
    const order = await addDoc(collectionRef, Buyorder);    
    setOrderFirebase({id: order.id, complete: true});
  }

  function inputChangeHandler(evt) {
    const input = evt.target;

    const value = input.value;
    const inputName = input.name;

    let copyUserData = { ...userData };

    copyUserData[inputName] = value;
    setUserData(copyUserData);
  }

  function handleReset(e) {
    setUserData({
      name: "",
      email: "",
      telefono: "",
    });
  }
  if (orderFirebase.complete === true) {
    return (
      <div>
        <h1>Gracias por tu compra!</h1>
        <p>El id de seguimiento de tu compra es: {orderFirebase.id}</p>
      </div>
    );
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
            required
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
            required
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
            required
          />
        </div>

        <div>
          <button type="submit" onClick={handleSubmit}>Finalizar Compra</button>
          <button type="reset">Cancelar</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
