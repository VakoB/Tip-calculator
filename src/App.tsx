import "./App.css";
import CardComponent from "./components/CardComponent/CardComponent";
import logo from "./assets/logo.svg";

function App() {
  return <div className="app">
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
    <CardComponent />
  </div>
}

export default App;
