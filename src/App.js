import logoHome from "./plataforma.jpg";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <img src={logoHome} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
