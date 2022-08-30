import "./App.css";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartView from "./components/CartView/CartView.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import {CartProvider} from "./store/cartContext.jsx";


function App() {



  return (
    <div className="App">
      <BrowserRouter>
       <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/detalle/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartView/>}/>
          </Routes>
       </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
