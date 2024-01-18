import styles from "./PostHeader.module.css";
import "../../App.css"

export default function PostHeader() {
  return (
    <div className={`${styles.mid}`}>
      <div className={`${styles.container} mt-3`}>
        <nav className={`navbar navbar-expand-lg ${styles.mobview}`}>
          <div className="container-fluid ">

            <div className="dropdown-center border rounded-1 bg-success border-1 me-4 border-success">

              <button
                className="btn dropdown-toggle text-white border border-0 m-1 me-3 p-2"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <a
                  className="btn border-0 fa-solid fa-list fa-lg text-white"
                  href="#"
                ></a>
                Categories
              </button>

              <ul className="dropdown-menu">
                
                <li>
                  <a className="dropdown-item" href="#">
                    Shirts
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Jeans
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Swimwear
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sleepwear
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sportswear
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Jumpsuits
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Blazers
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Jackets
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Shoes
                  </a>
                </li>
              </ul>
            </div>
            {/* </a> */}

            <button
              className="navbar-toggler bg-white"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className={`offcanvas offcanvas-start` } style={{width: "210px"}}
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header ">
                <img
                  src="./logo1.png"
                  className="offcanvas-title w-75"
                  id="offcanvasNavbarLabel"
                />
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>

              <div className={`offcanvas-body ${styles.menu}`}>
                <div className="">
                  <ul
                    className={`navbar-nav  justify-content-end flex-grow-1 pe-3 ${styles.colr}`}
                  >
                    <li className="nav-item">
                      <a href="#" className="nav-link" aria-current="page">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link ">
                        Shop
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link ">
                        Shop Detail
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link ">
                        Contact
                      </a>
                    </li>
                    <li className="nav-item dropdown ">
                      <a
                        href="#"
                        className="nav-link dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Pages
                      </a>
                      <ul className="dropdown-menu bg-success ">
                        <li>
                          <a href="#" className="dropdown-item text-white">
                            Shopping Cart
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item text-white">
                            Checkout
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div className={` ${styles.lmg}`}>
                  <a href="#" className="btn px-0 ml-2 me-4">
                    <i className="fas fa-heart me-1 fa-xl text-success"></i>
                    <span className="badge  border border-success  rounded-circle">
                      0
                    </span>
                  </a>

                  <a href="#" className="btn px-0 ml-2">
                    <i className="fas fa-shopping-cart fa-xl me-1 text-success"></i>
                    <span className="badge  border border-success rounded-circle">
                      0
                    </span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </nav>
      </div>
    </div>
  );
}
