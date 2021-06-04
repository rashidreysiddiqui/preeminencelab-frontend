import ContactUs from "../images/ContactUs.png";
const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="p-5">
            <img
              src={ContactUs}
              alt="Contact Us"
              style={{
                width: "100%",
                height: "50vh",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
        <div className="col-md-6">
          <form className="mt-5">
            <h4 className="section-title">Contact Us</h4>

            <div className="form-group">
              {" "}
              <label className="form-label">Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              {" "}
              <label className="form-label">Email</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              {" "}
              <label className="form-label">Mobile</label>
              <input type="number" className="form-control" />
            </div>
            <div className="form-group">
              {" "}
              <label className="form-label">Message</label>
              <textarea
                type="text"
                className="form-control"
                columns="30"
                rows="10"
                style={{ resize: "none" }}
              />
            </div>

            <button className="btn btn-lg my-btn-primary">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
