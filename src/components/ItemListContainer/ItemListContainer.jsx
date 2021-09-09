import Cards from '../Card/Cards'
import './ItemListContainer.css'

export default function ItemListContainer({greetings}) {
  const onAdd = (cant)=>{
    console.log(cant);
  }
  return (
    <div className="container-list">
      <div className="title">
      <h1>
        {greetings}
      </h1>
      </div>
      <div className="container-cards">
        <Cards onAdd={onAdd}/>
        <Cards onAdd={onAdd}/>
        <Cards onAdd={onAdd}/>
        <Cards onAdd={onAdd}/>
      </div>
    </div>
  )
}
