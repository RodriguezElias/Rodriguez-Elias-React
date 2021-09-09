import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount'

export default function Cards({onAdd}) {

  return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>  
        </Card.Body>
        <Card.Footer>
        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </Card.Footer>
      </Card>
  );
}
