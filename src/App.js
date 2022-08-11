
import "./App.css";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import fondogriffindor from "./fondogriffindor.jpg";
import fondoslytherin from "./fondoslytherin.jpg";
import fondohufflepuff from "./fondohufflepuff.jpg";
import fondorevenclaw from "./fondorevenclaw.jpg";
import { BrowserRouter } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  const product = {
    name: "Nombre",
    description: "esto es una descripcion",
    imgurl: "https://picsum.photos/200/300",
    price: 250,
  };
  const fondo = {
    griffindor: fondogriffindor,
    Hufflepuff: {fondohufflepuff},
    Ravenclaw:{fondorevenclaw},
    Slytherin:fondoslytherin
  }

  return (
    <div className="App">
      <Header />

      <ItemListContainer text="Griffindor" fondo={fondo.griffindor}/>
        
      <ItemDetailContainer/>

      {/*<ItemListContainer text="Hufflepuff" fondo={fondohufflepuff}>
        <Card data={product} />
      </ItemListContainer>
      <ItemListContainer text="Ravenclaw" fondo={fondorevenclaw}>
        <Card data={product} />
      </ItemListContainer>
      <ItemListContainer text="Slytherin" fondo={fondoslytherin}>
        <Card data={product} />
      </ItemListContainer> */}

    </div>
  );
}

export default App;
