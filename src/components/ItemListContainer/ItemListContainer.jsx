import React from "react";
import "./ItemListContainer.css";
import itemsData from "../../components/Data/Data.js";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

import firestoreBD from "../../services/firestore";
import {getDocs, collection, Firestore, query, where} from "firebase/firestore" 

function getProduct() {
  return new Promise((resolve) => {
   // setTimeout(() => resolve(itemsData), 1000);
   const funkocollection = collection(firestoreBD, "funkogot");
   getDocs(funkocollection).then((snapshot) => {
    const docsData =snapshot.docs.map((doc)=>{
      return{...doc.data(),id:doc.id}
    });
    resolve(docsData);
     });
    });
}

const getItemsFromDBbyCategory = (category) =>{
  return new Promise ((resolve) =>{
    const funkocollection = collection(firestoreBD, "funkogot")
    const q = query(funkocollection, where("category", "==", category));
    getDocs(q).then((snapshot)=>{
      const docsData = snapshot.docs.map((doc)=>{
        return {...doc.data(),id:doc.id}
      });
      resolve(docsData);
    });
  });
};



export default function ItemListContainer() {
  const [data, setData] = useState([]);

  const idCategory = useParams().category;

  useEffect(()=>{
    if(idCategory === undefined)
    getProduct().then((respuesta)=>{
      setData(respuesta);
    });
    else{
      getItemsFromDBbyCategory(idCategory).then((respuesta)=>{
        setData(respuesta);
      })
    }
  },[idCategory]);
  /*useEffect(() => {
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
  }, [idCategory]);*/

  return (
    // <div className="card-container">
    <ItemList products={data}></ItemList>
  );
}