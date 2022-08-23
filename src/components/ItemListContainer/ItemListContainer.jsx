import React from "react";
import "./ItemListContainer.css";
import itemsData from "../../components/Data/Data.js";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

import firestoreBD from "../../services/firestore";
import {getDocs, collection} from "firebase/firestore" 

function getProduct() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(itemsData), 1000);
  });
}

export default function ItemListContainer() {
  const [data, setData] = useState([]);

  const idCategory = useParams().category;
  useEffect(() => {
    getProduct()
      .then((respuesta) => {
        let filtrados = respuesta.filter((elemento) => elemento.category === idCategory);
        if (idCategory === undefined){
         
          setData(respuesta);
        }
        else {
          
          setData(filtrados);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idCategory]);

  return (
    // <div className="card-container">
    <ItemList products={data}></ItemList>
  );
}