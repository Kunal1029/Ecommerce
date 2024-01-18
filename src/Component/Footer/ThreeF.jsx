import sty from "./Footer.module.css";

export default function ThreeF() {
  return (
    <div className={`mt-4 ms-4 ${sty.subheader}`}>
      <div style={{ }}>
        <h5>NEWSLETTER</h5>
        <p>Subscribe for getting existing offers.</p>

        <div className="mb-5 rounded-2  me-1">
          <input
            className={`p-1 border border-1 border-success ${sty.w3}`}
            type="email"
            placeholder="Email Address"
          />
          <button className="bg-success text-white p-1 border-1 border-success">
            Sign Up
          </button>
        </div>

        <div className="mb-5">
          <h6>Follow us</h6>

          <div className="d-flex">
            <a className="btn btn-success btn-square ms-2" href="#">
              <i className="fab fa-twitter  "></i>
            </a>
            <a className="btn btn-success btn-square ms-2" href="#">
              <i className="fab fa-facebook-f "></i>
            </a>
            <a className="btn btn-success btn-square ms-2" href="#">
              <i className="fab fa-linkedin-in  "></i>
            </a>
            <a className="btn btn-success btn-square ms-2" href="#">
              <i className="fab fa-instagram  "></i>
            </a>
          </div>
        </div>
      </div>    
    </div>
  );
}
