import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">
              Preeminence Lab softwares is formed with the vision of providing end to
              end online service to those businessmen who want to go online, so
              that they don't have to hassle while looking for the industry
              experts at different places. We, at Preeminence Lab softwares, are a group
              of high performing experts from the feild of website development ,
              app development , graphic designing and digital marketing.
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Popular Categories</h6>
            <ul className="footer-links">
              <Link to="#">
                <li>Web Development</li>
              </Link>
              <Link to="#">
                {" "}
                <li>App Development</li>
              </Link>
              <Link to="#">
                {" "}
                <li>Digital Marketing</li>
              </Link>
              <Link to="#">
                {" "}
                <li>Graphic Designing</li>
              </Link>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Get in Touch</h6>
            <ul className="footer-links" style={{fontSize:"1rem"}}>
              <li className="d-flex align-items-center">
                <i className="ri-phone-line mr-2"></i> <a href="tel:+91-7017554779" style={{cursor:"pointer"}}>+91-7017554779</a>
              </li>
              <li className="d-flex align-items-center">
                <i className="ri-mail-line mr-2"></i> <a href="mailto:info@preeminencelab.in" style={{cursor:"pointer"}}>info@preeminencelab.in</a>
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
              <Link to="/"> preeminencelab.in</Link>
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a
                  className="facebook"
                  target="/"
                  href="https://www.facebook.com/preeminencelabdoon/"
                >
                  <i className="fa fa-facebook"></i>
                </a>
              </li>

              <li>
                <a
                  className="instagram"
                  target="/"
                  href="https://instagram.com/"
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
