import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "../src/pages/Home";
import Card from "./component/Card";
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <div>
      <CartProvider>
        <Home />
        <Card />
      </CartProvider>
    </div>
  );
}

export default App;
