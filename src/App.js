import NavBar from './components/NavBar/NavBar';
import Carousel from './components/Carousel/Carousel';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div>
      <div className="header">
        <NavBar/>
      <Carousel  />
      </div>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
