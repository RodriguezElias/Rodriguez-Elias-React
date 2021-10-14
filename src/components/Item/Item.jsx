import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

export default function Item({title,price,image,id}) {

  return (
      <Card className="card" >
        <Link className="m-auto" to={`/detalle/${id}`}>
        <Card.Img variant="top" src={image} className="product-img" />
        </Link>
        <Card.Body className="containerInfo">
        <Card.Title className="card-title p-3">{title}</Card.Title>
        <Card.Text className="p-2">{`$ ${price}`} </Card.Text>
        </Card.Body> 
      </Card>
  );
}