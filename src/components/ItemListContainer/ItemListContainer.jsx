import './ItemListContainer.css'

export default function ItemListContainer(props) {
  return (
    <div className="container-list">
      <div className="title">
      <h1>
        {props.greetings}
      </h1>
      </div>
    </div>
  )
}
