import React, {useState} from 'react'
import Button from '../Button/Button';
import "./ItemCount.css";

function ItemCount(props) {

const [clicks, setClicks] = useState(1);

const handleMinus = ()=> {
    clicks > props.initial ? setClicks(clicks-1) : setClicks(clicks+0) ;
}
const handlePlus = ()=> {
    clicks < props.stock ? setClicks(clicks+1) : setClicks(clicks+0) ;
}

  return (
    <>
    <div className='handleButton'>
        <Button onClick={handleMinus} text="-"></Button>
        <h3>{clicks}</h3>
        <Button onClick={handlePlus} text="+"></Button>
    </div>
    <Button onClick={()=> props.onAdd(clicks)} text="Añadir al carrito"> </Button>
        
    </>
  )
}

export default ItemCount