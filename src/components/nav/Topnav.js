import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Topnav = () => {
  return (
    <nav className="navbar navbar-expand-md">
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <img src={Logo} alt="logo" style={{ width: "40px" }} className="mr-2" /> Preeminence Lab
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="material-icons" style={{ color: "#03989e" }}>
          menu
        </span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link
              className="nav-link"
              style={{ textDecoration: "none" }}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/about-us">
              About Us
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/pricing">
              Pricing
            </Link>
          </li> */}
          <li className="nav-item active">
            <Link className="nav-link" to="/contact-us">
              Contact Us
            </Link>
          </li>
          {/* <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Find a property
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li> */}
        </ul>
        {/* <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form> */}
      </div>
    </nav>
  );
};

export default Topnav;
