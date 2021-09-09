import Carousel from 'react-bootstrap/Carousel'
import './Carousel.css'
import IMAGE1 from '../../assets/images/woman-1.jpg'
import IMAGE2 from '../../assets/images/woman-2.jpg'
import IMAGE3 from '../../assets/images/woman-3.jpg'

export default function Carousels() {
  return (
      <Carousel className="container-carousel">
        
  <Carousel.Item className="container-img">
    <img
      className="d-block w-100 img"
      src={IMAGE1}
      alt="First slide"
    />
    <div className="title-img">
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores non quasi perspiciatis minima consectetur totam?
      </h1>
    </div>
  </Carousel.Item>
  <Carousel.Item className="container-img">
    <img
      className="d-block w-100 img"
      src={IMAGE2}
      alt="Second slide"
    />

    <div className="title-img">
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores non quasi perspiciatis minima consectetur totam?
      </h1>
    </div>
  </Carousel.Item>
  <Carousel.Item className="container-img">
    <img
      className="d-block w-100 img"
      src={IMAGE3}
      alt="Third slide"
    />
    <div className="title-img">
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores non quasi perspiciatis minima consectetur totam?
      </h1>
    </div>
  </Carousel.Item>
</Carousel>
  )
}
