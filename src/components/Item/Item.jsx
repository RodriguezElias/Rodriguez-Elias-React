import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'

export default function Item({title,description,image,stock,onAdd}) {

  return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} className="product-img" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>  
        </Card.Body>
        <Card.Footer>
        <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
        </Card.Footer>
      </Card>
  );
}
