import Carousel from "react-elastic-carousel";
import "../index.css";
import Banner1 from "../images/Digital Marketing.svg";
import Banner2 from "../images/Graphic Design.svg";
import Banner3 from "../images/Mobile app Development.svg";
import Banner4 from "../images/Web Development.svg";
import Responsive from "../images/3SBK.gif";
const Home = () => {
  // const breakPoints = [
  //   { width: 1, itemsToShow: 1 },
  //   { width: 550, itemsToShow: 1 },
  //   { width: 768, itemsToShow: 1 },
  //   { width: 1200, itemsToShow: 1 },
  // ];
  return (
    <>
      <div className="carousel">
        <Carousel disableArrowsOnEnd={false}>
          <img
            src={Banner1}
            style={{ width: "100%", height: "50vh", objectFit: "contain" }}
            alt="digital marketing"
          />

          <img
            src={Banner2}
            style={{ width: "100%", height: "50vh", objectFit: "contain" }}
            alt="grahic designing"
          />

          <img
            src={Banner3}
            style={{ width: "100%", height: "50vh", objectFit: "contain" }}
            alt="app development"
          />

          <img
            src={Banner4}
            style={{ width: "100%", height: "50vh", objectFit: "contain" }}
            alt="web development"
          />
        </Carousel>
      </div>
      <br />
      <br />
      <hr />
      <br />
      <h1 className="text-center section-title">Our Services</h1>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-4">
              <img
                src={Banner1}
                style={{ width: "100%", height: "50vh", objectFit: "contain" }}
                alt="digital marketing"
              />
              <h4 className="card-title">
                <strong>Digital Marketing</strong>
              </h4>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <img
                src={Banner2}
                style={{ width: "100%", height: "50vh", objectFit: "contain" }}
                alt="grahic designing"
              />
              <h4 className="card-title">
                <strong>Graphic Designing</strong>
              </h4>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <img
                src={Banner3}
                style={{ width: "100%", height: "50vh", objectFit: "contain" }}
                alt="app development"
              />
              <h4 className="card-title">
                <strong>App Development</strong>
              </h4>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <img
                src={Banner1}
                style={{ width: "100%", height: "50vh", objectFit: "contain" }}
                alt="web development"
              />
              <h4 className="card-title">
                <strong>Web Development</strong>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <h1 className="text-center section-title">Why Choose Us</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <br />
            <br />
            <h2 className="c-us-title">2 years of industry experience</h2>
            <p className="c-us-body">
              We are giving our clients best service in web and app development
              to grow their business since 2 years.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src={Responsive}
              style={{ width: "100%", height: "50vh", objectFit: "contain" }}
              alt="responsive gif"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
