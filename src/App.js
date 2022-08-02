import logoHome from "./plataforma.jpg";
import "./App.css";
import Header from "./components/Header/Header";
import Card from "../src/components/Card/Card";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import fondogriffindor from "./fondogriffindor.jpg";

function App() {
  const product = {
    name: "Nombre",
    description: "esto es una descripcion",
    imgurl: "https://picsum.photos/200/300",
    price: 250,
  };
  const fondo = {
    griffindor: fondogriffindor,
    Hufflepuff: {},
    Ravenclaw:{},
    Slytherin:{}
  }

  return (
    <div className="App">
      <Header />

      <ItemListContainer text="Griffindor" fondo={fondo.griffindor}>
        <Card data={product}/>
      </ItemListContainer>
      <ItemListContainer text="Hufflepuff" fondo={fondogriffindor}>
        <Card data={product} />
      </ItemListContainer>
      <ItemListContainer text="Ravenclaw" fondo={fondogriffindor}>
        <Card data={product} />
      </ItemListContainer>
      <ItemListContainer text="Slytherin" fondo={fondogriffindor}>
        <Card data={product} />
      </ItemListContainer>

      <img src={logoHome} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
