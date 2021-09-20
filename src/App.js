import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Carousel from "./components/Carousel/Carousel";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="header">
        <NavBar />
        <Carousel />
      </div>
      <Switch>
        <Route exact component={ItemListContainer}path='/' />

        <Route component={ItemListContainer} path='/categoria/:idCategory' />

        <Route component={ItemDetailContainer} path='/detalle/:id' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
