import { Link } from "react-router-dom";


function Breadcrumbs({ category, bread}) {
  return (
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
