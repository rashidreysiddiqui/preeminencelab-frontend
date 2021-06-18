import Carousel from "react-elastic-carousel";
import "../index.css";
import Banner1 from "../images/Banner1.png";
import Banner2 from "../images/Banner2.png";
import Banner3 from "../images/Banner3.png";
import Banner4 from "../images/Banner4.png";
import Responsive from "../images/3SBK.gif";
import AppDevelopment from "../images/app-development.gif";
import WebDevelopment from "../images/web-development.gif";
import WebAndAppDesigning from "../images/web-and-app-designing.gif";
import DigitalMarketing from "../images/digital-marketing.gif";
import ContentWriting from "../images/content-writing.gif";
import SocialMediaMarketing from "../images/social-media-marketing.gif";
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
                src={AppDevelopment}
                style={{ width: "100%", height: "50vh", objectFit: "contain" }}
                alt="digital marketing"
              />
              <h4 className="card-title">
                <strong>App Development</strong>
              </h4>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4">
              <img
                src={WebDevelopment}
                style={{ width: "100%", height: "50vh", objectFit: "contain" }}
                alt="grahic designing"
              />
              <h4 className="card-title">
                <strong>Web Development</strong>
              </h4>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4">
              <img
                src={WebAndAppDesigning}
                style={{ width: "100%", height: "50vh", objectFit: "contain" }}
                alt="app development"
              />
              <h4 className="card-title">
                <strong>Web And App Designing</strong>
              </h4>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4">
              <img
                src={DigitalMarketing}
                style={{ width: "100%", height: "50vh", objectFit: "contain" }}
                alt="web development"
              />
              <h4 className="card-title">
                <strong>Digital Marketing</strong>
              </h4>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4">
              <img
                src={ContentWriting}
                style={{ width: "100%", height: "50vh", objectFit: "contain" }}
                alt="web development"
              />
              <h4 className="card-title">
                <strong>Content Writing</strong>
              </h4>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4">
              <img
                src={SocialMediaMarketing}
                style={{ width: "100%", height: "50vh", objectFit: "contain" }}
                alt="web development"
              />
              <h4 className="card-title">
                <strong>Social Media Marketing</strong>
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
