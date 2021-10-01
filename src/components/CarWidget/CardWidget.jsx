export default function CardWidget({count = 0}) {
  return (
    <div>
      <button className="bg-transparent border-0">
      <i className="fas fa-shopping-cart fa-2x text-secondary"></i>
      </button>
      <span className=" text-white p-1 rounded-pill " style={{backgroundColor:"#3ac8c8"}}>{count}</span>
    </div>
  )
}
