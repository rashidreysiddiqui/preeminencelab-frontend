import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">
              Darvwin softwares is formed with the vision of providing end to
              end online service to those businessmen who want to go online, so
              that they don't have to hassle while looking for the industry
              experts at different places. We, at darvwin softwares, are a group
              of high performing experts from the feild of website development ,
              app development , graphic designing and digital marketing.
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Popular Categories</h6>
            <ul className="footer-links">
              <Link to="/web-development">
                <li>Web Development</li>
              </Link>
              <Link to="/app-development">
                {" "}
                <li>App Development</li>
              </Link>
              <Link to="/digital-marketing">
                {" "}
                <li>Digital Marketing</li>
              </Link>
              <Link to="/graphic-designing">
                {" "}
                <li>Graphic Designing</li>
              </Link>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              {/* <li>
                <Link to="/contact">Contact Us</Link>
              </li> */}
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/feedback">Give Feedback</Link>
              </li>
              <li>
                <Link to="/faq">FAQ's</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; {new Date().getFullYear()} All Rights Reserved by
              <Link to="/"> Darvwin.com</Link>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a
                  className="facebook"
                  target="/"
                  href="https://www.facebook.com/Darvwin-softwares-109479151341159/"
                >
                  <i className="fa fa-facebook"></i>
                </a>
              </li>

              <li>
                <a
                  className="instagram"
                  target="/"
                  href="https://instagram.com/darvwin_softwares?utm_medium=copy_link"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
