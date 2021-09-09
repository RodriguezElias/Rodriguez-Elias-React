import NavBar from './components/NavBar/NavBar';
import Carousel from './components/Carousel/Carousel';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css';

function App() {
  return (
    <div>
      <div className="header">
        <NavBar/>
      <Carousel  />
      </div>
      <ItemListContainer/>
    </div>
  );
}

export default App;
