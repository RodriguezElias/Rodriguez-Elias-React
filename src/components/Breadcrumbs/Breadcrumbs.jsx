import { Link } from "react-router-dom";


function Breadcrumbs({ category, bread}) {
  return (
    // <Breadcrumb className="container-breadcrumb">
    //   <Link exact to="/" className="text-decoration-none">
    //     <Breadcrumb.Item href="#action" className="ms-2 me-2">Home</Breadcrumb.Item>
    //   </Link>
    //   <Link exact to={`/categoria/${category}`} className="text-decoration-none">
    //     <Breadcrumb.Item active={active? "active": "" } href="#action" className="me-2 bread-item">
    //       {category}
    //     </Breadcrumb.Item>
    //   </Link>
    //   {bread && (
    //       <Breadcrumb.Item className="bread-item text-decoration-none">{bread}</Breadcrumb.Item>
    //   )}
    // </Breadcrumb>
    <div className="container-breadcrumb">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <Link exact to="/">
            <li className={category?'breadcrumb-item ': 'breadcrumb-item active'}>
              Home /
            </li>
          </Link>
          {category && (
            <Link
              exact
              to={`/categoria/${category}`}
              className="text-decoration-none"
            >
              <li className={bread?'breadcrumb-item ': 'breadcrumb-item active'}>
                {`${category} /`}
              </li>
            </Link>
          )}
          {bread && (
            <li className="breadcrumb-item active" aria-current="page">
              {bread}
            </li>
          )}
        </ol>
      </nav>
    </div>
  );
}

export default Breadcrumbs;
