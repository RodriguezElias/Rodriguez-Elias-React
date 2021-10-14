

export default function CardWidget({count = 0}) {
  return (
    <div className="container-cardwidget">
      <button className="bg-transparent border-0 button">
      <i className="fas fa-shopping-cart fa-2x text-secondary"></i>
      </button>
      <span className=" text-white number" style={{backgroundColor:"#3ac8c8"}}>{count}</span>
    </div>
  )
}
