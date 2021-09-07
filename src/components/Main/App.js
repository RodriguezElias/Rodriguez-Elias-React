import NavBar from '../NavBar/NavBar';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import Carousel from '../Carousel/Carousel';
import './App.css';

function App() {
  return (
    <div>
      <div className="header">
        <NavBar/>
      <Carousel  />
      </div>
    </div>
  );
}

export default App;
