import React, {useState} from 'react'
import Button from '../Button/Button';

function ItemCount(props) {

const [clicks, setClicks] = useState(1);

const handleMinus = ()=> {
    clicks > props.initial ? setClicks(clicks-1) : setClicks(clicks+0) ;
}
const handlePlus = ()=> {
    clicks < props.stock ? setClicks(clicks+1) : setClicks(clicks+0) ;
}
const add = () =>{
    console.log("Añadido al carrito");
}
  return (
    <>
    <div className='handleButton'>
        <Button onClick={handleMinus} text="-"></Button>
        <h3>{clicks}</h3>
        <Button onClick={handlePlus} text="+"></Button>
    </div>
    <Button onClick={add} text="Añadir al carrito"> </Button>
        
    </>
  )
}

export default ItemCount