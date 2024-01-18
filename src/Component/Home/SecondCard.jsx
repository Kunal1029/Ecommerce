import "../../App.css";
import "./Home.css";

export default function SecondCard() {
  return (
    <div className="mt-5 m-auto">
      <div className="container">
        <div className="row SC d-flex align-item-center">
          <div className="col-lg-3  col-md-6 col-sm-12  p-1">
            <div
              className="d-flex align-items-center bg-white justify-content-center  mb-1 "
              style={{ height: "90px" }}
            >
              <h1 className="fa fa-check text-success me-4"></h1>
              <h5 className=" font-weight-semi-bold">Quality Product</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6   col-sm-12  p-1">
            <div
              className="d-flex align-items-center bg-white  justify-content-center  mb-1"
              style={{ height: "90px" }}
            >
              <h1 className="fa fa-shipping-fast text-success  me-4"></h1>
              <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6    col-sm-12  p-1">
            <div
              className="d-flex align-items-center bg-white justify-content-center  mb-1"
              style={{ height: "90px" }}
            >
              <h1 className="fas fa-exchange-alt text-success me-4"></h1>
              <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6   col-sm-12  p-1">
            <div
              className="d-flex align-items-center bg-white justify-content-center mb-1"
              style={{ height: "90px" }}
            >
              <h1 className="fa fa-phone-volume text-success me-4"></h1>
              <h5 className="font-weight-semi-bold ">24/7 Support</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
