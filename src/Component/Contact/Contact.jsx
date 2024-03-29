import ShopHeader from "../PageLocater/ShopHeader";
export default function Contact() {
  return (
    <div className="PageContainer">
      <ShopHeader currPage="Contact" />
      <div className="container-fluid">
        <h2 className="text-uppercase mt-4 mb-2">
          <span className=" ">Contact Us</span>
        </h2>
        <div className="row m-auto">
          <div className="col-lg-7 mb-5 bg-white">
            <div className="contact-form  p-4">
              <div id="success"></div>
              <form name="sentMessage" id="contactForm">
                <div className="control-group mb-4  ">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required="required"
                    data-validation-required-message="Please enter your name"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group mb-4  ">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                    required="required"
                    data-validation-required-message="Please enter your email"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group mb-4  ">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Subject"
                    required="required"
                    data-validation-required-message="Please enter a subject"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group mb-4  ">
                  <textarea
                    className="form-control"
                    rows="8"
                    id="message"
                    placeholder="Message"
                    required="required"
                    data-validation-required-message="Please enter your message"
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div>
                  <button
                    className="btn btn-success py-2 px-4"
                    type="submit"
                    id="sendMessageButton"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 mb-5 ">
            <div className=" p-3 mb-3  bg-white">
              <iframe
                style={{ width: "100%", height: "250px" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                allowfullscreen=""
                aria-hidden="false"
              ></iframe>
            </div>
            
            <div className="bg-white p-4 mt-4 ms-3 mb-3">
              <p className="mb-2">
                <i className="fa fa-map-marker-alt text-success me-3"></i>123
                Street, New York, USA
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope text-success me-3"></i>
                info@example.com
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt text-success me-3"></i>+012 345
                67890
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
