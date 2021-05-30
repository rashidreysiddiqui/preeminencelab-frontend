import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              eleifend nulla. Curabitur eget pulvinar ex. Ut pharetra, nulla
              vitae sagittis maximus, justo nunc ullamcorper nisl, in imperdiet
              lectus velit sit amet ipsum. Etiam varius, augue eu efficitur
              tristique, risus enim efficitur massa, ac ullamcorper dui magna id
              neque. Pellentesque volutpat orci orci, vehicula pretium urna
              sagittis vitae. In tristique in est at semper. Cras sit amet
              lectus vitae magna pulvinar ullamcorper. In mattis, risus accumsan
              iaculis dapibus, lacus ligula tincidunt velit, quis auctor lorem
              enim non diam.
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
                <Link to="/about">About Us</Link>
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
              <Link to="/"> Darwin.com</Link>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a
                  className="facebook"
                  target="/"
                  href="https://www.facebook.com"
                >
                  <i className="fa fa-facebook"></i>
                </a>
              </li>

              <li>
                <a
                  className="instagram"
                  target="/"
                  href="https://www.instagram.com"
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
