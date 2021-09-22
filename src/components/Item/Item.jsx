import Card from 'react-bootstrap/Card';
import './Item.css'
import {Link} from 'react-router-dom'

export default function Item({title,price,image,id}) {

  return (
      <Card style={{ width: "18rem" }}>
        <Link to={`/detalle/${id}`}>
        <Card.Img variant="top" src={image} className="product-img" />
        </Link>
        <Card.Body className="containerInfo">
        <Card.Title>{title}</Card.Title>
        <Card.Title>{`$ ${price}`} </Card.Title>
        </Card.Body>
      </Card>
  );
}