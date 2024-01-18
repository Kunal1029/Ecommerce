import sty from "./Footer.module.css";

export default function OneF() {
  return (
    <>
      <div className={` ${sty.subwidthP}`}>
        <div>
          <h5 className="mt-5">GET IN TOUCH</h5>
          <p className={`mt-4 mb-4`}>
            Online sales continue to grow. By 2026, almost a quarter of all
            retail sales are likely to happen online—so if you have a small
            business, you should probably have a web store. The good news is
            that with the right tools, it&apos;s easy for any small business to
            quickly start selling online.
          </p>

          <div className="lh-1">
            <p>
              <i className="fa fa-map-marker-alt text-success me-3"></i>
              123 Street, Gwl, IND
            </p>
            <p>
              <i className="fa fa-envelope text-success me-3"></i>
              info@example.com
            </p>
            <p>
              <i className="fa fa-phone-alt text-success me-3"></i>
              +0751 345 67890
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
