import ContactUs from "../images/ContactUs.png";
const Contact = () => {
  return (
    <div className="container">
      
      <div className="row mb-4">
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

      <div className="row">
        <div className="col-md-4">
          <div className="border d-flex flex-column align-items-center p-3 h-100">
            <i className="ri-map-pin-line" style={{color:"#03989e",fontSize:"2rem"}}></i>
            <h4 style={{color:"#03989e"}}>Address</h4>
            <p className="text-center">Dehradun Township- Bidholi- Majhaun Rd, Pondha, Uttarakhand 248007</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="border d-flex flex-column align-items-center p-3 h-100">
            <i className="ri-phone-line" style={{color:"#03989e",fontSize:"2rem"}}></i>
            <h4 style={{color:"#03989e"}}>Phone</h4>
            <a href="tel:+91-7899594779">+91-7899594779</a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="border d-flex flex-column align-items-center p-3 h-100">
            <i className="ri-mail-line" style={{color:"#03989e", fontSize:"2rem"}}></i>
            <h4 style={{color:"#03989e"}}>Email</h4>
            <a href="mailto:info@preeminencelab.in">info@preeminencelab.in</a>
          </div>
        </div>
      </div>
    </div>
  );
};





export default Contact;
