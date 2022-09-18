import React from 'react'
import { ChaoticOrbit } from '@uiball/loaders'
import { useContext } from "react";
import { cartContext } from "../../store/cartContext";
import "./CartDetail.css";
import Form from '../UserForm/Form';


function CartDetail({detail}) {
    
    const { removeItem, totalItem } = useContext(cartContext);
  return (
     <div>
     {
       detail.length < 0 ?

       <>
         <h1>Productos en carrito</h1>
         <ChaoticOrbit 
         size={25}
         speed={1.5} 
         color="black" 
         />
       </>
     :
     <>
         {detail.map((elemento) => {
           return (
             <div key={elemento.key}>
               <div className="grid-container">
                 <h1>Producto</h1>
                 <h1>Cantidad</h1>
                 <h1>Precio</h1>
                 <h1></h1>
               </div>
               <div className="grid-container">
                 <h2>{elemento.tittle}</h2>
                 <h2>{elemento.quantity}</h2>
                 <h2>${elemento.quantity * elemento.price}</h2>
                 <button onClick={() => removeItem(elemento.id)}>Eliminar</button>
               </div>
             </div>
           );
         })}
         <div>
           <h2></h2>
           <h2></h2>
           <h2></h2>
           <h2>
             {
             totalItem()===0 ?
             <span>No hay items en el carrito</span>
             :
             <h3>Items totales: {totalItem()}
             <Form cart={detail}/>
             </h3>
             }
           </h2>
             
         </div>
     </>
       }
     </div>
  )
}

export default CartDetail