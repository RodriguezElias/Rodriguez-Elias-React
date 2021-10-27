import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./context/cartContext";
import AddProducts from "./components/AddProducts/AddProducts";
import Login from "./components/Login/Login";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginContextProvider from "./context/loginContext";

function App() {
  return (
    <LoginContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact component={ItemListContainer} path="/" />
            <Route component={ItemListContainer}path="/categoria/:idCategory"/>
            <Route component={ItemDetailContainer} path="/detalle/:id" />
            <Route component={Cart} path="/cart" />
            <Route component={AddProducts} path="/add-product" />
            <Route component={Login} path="/login" />
          </Switch>
        </BrowserRouter>
      </CartContextProvider>
    </LoginContextProvider>
  );
}

export default App;
