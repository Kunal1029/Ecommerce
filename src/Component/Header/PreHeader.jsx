import styles from "./Header.module.css";
import "../../App.css"

export default function PreHeader() {
  return (
    <>
      <div className={`PageContainer ${styles.nav} `}>
        <div className={`${styles.fnave}`}>
          <div className={`col-lg-6 ${styles.lgg}`}>
            <ul className={`nav ${styles.nav}`}>
              <li className="">
                <a className="" href="#">
                  About
                </a>
              </li>
              <li className="">
                <a className="" href="#">
                  Contact
                </a>
              </li>
              <li className="">
                <a className="" href="#">
                  Help
                </a>
              </li>
              <li className="">
                <a className="">FAQs</a>
              </li>
            </ul>
          </div>

          <div className={`col-lg-6  ${styles.lmg}`}>

            <a href="" className="btn px-0 ml-2 me-2">
              <i className="fas fa-heart me-1"></i>
              <span className="badge  border border-dark rounded-circle">
                0
              </span>
            </a>

            <a href="" className="btn px-0 ml-2">
              <i className="fas fa-shopping-cart me-1"></i>
              <span className="badge  border border-dark rounded-circle">
                0
              </span>
            </a>
            
          </div>

          {/* 2nd ul */}
          <div className="col-lg-6">
            <ul className={`nav justify-content-end ${styles.nav}`}>
              <li className={`dropdown ${styles.dropdown}`}>
                <a
                  className=" dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                >
                  MyAccount
                </a>

                <ul className={`dropdown-menu `}>
                  <li>
                    <a className="dropdown-item" href="#">
                      sign in
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      sign up
                    </a>
                  </li>
                </ul>
              </li>

              {/* currency */}

              <li className="dropdown">
                <a
                  className=" dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                >
                  INR
                </a>

                <ul className={`dropdown-menu `}>
                  <li>
                    <a className="dropdown-item" href="#">
                      USD
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      EUR
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      CAD
                    </a>
                  </li>
                </ul>
              </li>

              {/* lang */}

              <li className="dropdown me-4">
                <a
                  className=" dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                >
                  HI
                </a>

                <ul className={`dropdown-menu `}>
                  <li>
                    <a className="dropdown-item" href="#">
                      EN
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      AU
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      FR
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
