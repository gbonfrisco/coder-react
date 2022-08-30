import React, { useEffect, useState } from "react";
import data from "../Data/Data.js";
import ItemDetail from "./ItemDetail.js";
import { resolvePath, useParams } from "react-router-dom";

import firestoreBD from "../../services/firestore";
import {collection,doc,getDoc} from "firebase/firestore";



function getProduct(id) {
  return new Promise((resolve,reject)=>{

  
  const funkocollection = collection(firestoreBD,"funkogot");
  const docRef = doc(funkocollection,id);

  getDoc(docRef).then(snapshot =>{
    resolve(
      {...snapshot.data(), id:snapshot.id}
    )
  });
})
}





function ItemDetailContainer() {
  const [item, setItem] = useState({});

  const idURL = useParams().id;



  useEffect(() => {
    getProduct(idURL).then((respuesta) => setItem(respuesta));
  }, []);

  return (
    <ItemDetail
      key={item.id}
      id={item.id}
      tittle={item.name}
      desc={item.description}
      price={item.price}
      img={item.img}
      stock={item.stock}
    />
  );
}
export default ItemDetailContainer;
