export default function ItemDetail({item}) {
  return (
    <div>
      <div>
        <img src={item.image} alt="" />
        </div>
      <div>
      <h1>{item.name}</h1>
      <h2>{item.description}</h2>
      <span>{item.price}</span>
      </div>
    </div>
  )
}
