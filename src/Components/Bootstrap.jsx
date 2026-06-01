//Boostrap 5 Demo

export default function Bootstrap() {
  return (
    <div>
      <h1>Bootstrap 5 Demo</h1>
      <button type="button" className="btn btn-primary">
        Primary
      </button>
      <button type="button" className="btn btn-secondary">
        Secondary
      </button>
      <button type="button" className="btn btn-success">
        Success
      </button>
      <button type="button" className="btn btn-danger">
        Danger
      </button>
      <button type="button" className="btn btn-warning">
        Warning
      </button>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
