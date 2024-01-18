/* eslint-disable react/prop-types */
import sty from "./Footer.module.css";

export default function TwoF({ head5 }) {
  return (
    <>
      <div className={`${sty.subwidth}`}>
        
          <h6 className={`${sty.subheader}`}>{head5}</h6>
          <div className={`d-flex flex-column mt-4 ${sty.subheader}`}  style={{ textAlign: "justify" }}>
            <a href="" className={`mb-2 text-decoration-none text-white `}>
              <i className="fa fa-angle-right me-1"></i>
              Home
            </a>
            <a href="" className={`mb-2 text-decoration-none text-white `}>
              <i className="fa fa-angle-right me-1"></i>
              Our Shop
            </a>
            <a href="" className={`mb-2 text-decoration-none text-white `}>
              <i className="fa fa-angle-right me-1"></i>
              Shop Details
            </a>
            <a href="" className={`mb-2 text-decoration-none text-white `}>
              <i className="fa fa-angle-right me-1"></i>
              Shopping Cart
            </a>
            <a href="" className={`mb-2 text-decoration-none text-white `}>
              <i className="fa fa-angle-right me-1"></i>
              Checkout
            </a>
            <a href="" className="mb-2 text-decoration-none text-white">
              <i className="fa fa-angle-right me-1"></i>
              Contact Us
            </a>
          </div>
       
      </div>
    </>
  );
}
