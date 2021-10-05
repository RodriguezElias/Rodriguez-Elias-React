import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Breadcrumbs.css";



function Breadcrumbs({ category, bread, active  }) {
  
  return (
    <Breadcrumb className="container-breadcrumb">
      <Link exact to="/" className="text-decoration-none">
        <Breadcrumb.Item href="#action" className="ms-2 me-2">Home</Breadcrumb.Item>
      </Link>
      <Link exact to={`/categoria/${category}`} className="text-decoration-none">
        <Breadcrumb.Item active={active? "active": "" } href="#action" className="me-2 bread-item">
          {category}
        </Breadcrumb.Item>
      </Link>
      {bread && (     
          <Breadcrumb.Item className="bread-item text-decoration-none">{bread}</Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
}

export default Breadcrumbs;
