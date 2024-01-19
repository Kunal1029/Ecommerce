// import Feature from "./Featured_products/Feature"
import Feature from "../Featured_products/Feature";
import styles from "../Featured_products/Feature.module.css";
// eslint-disable-next-line react/prop-types  
export default function FeatureProduct() {
  return (
    <div className="mt-5 mb-5">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <button className="btn btn-sm btn-light">
            <i className="fa fa-th-large fa-xl"></i>
          </button>
          <button className="btn btn-sm btn-light ml-2">
            <i className="fa fa-bars  fa-xl"></i>
          </button>
        </div>

        {/* <div className="ml-2">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-sm btn-light dropdown-toggle"
              data-toggle="dropdown"
            >
              Sorting
            </button>
            <div className=" dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="#">
                Latest
              </a>
              <a className="dropdown-item" href="#">
                Popularity
              </a>
              <a className="dropdown-item" href="#">
                Best Rating
              </a>
            </div>
          </div>
          <div className="btn-group ml-2">
            <button
              type="button"
              className="btn btn-sm btn-light dropdown-toggle"
              data-toggle="dropdown"
            >
              Showing
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="#">
                10
              </a>
              <a className="dropdown-item" href="#">
                20
              </a>
              <a className="dropdown-item" href="#">
                30
              </a>
            </div>
          </div>
        </div> */}

        <div className="d-flex">
          <div className="dropdown me-2">
            <button
              className="btn btn-outline-success dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sorting
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Latest
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Popularity
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Best Rating
                </a>
              </li>
            </ul>
          </div>

          <div className="dropdown">
            <button
              className="btn btn-outline-success dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Showing
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  10
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  20
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  30
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`container-fluid`}>
        <div className={`row`}>
          <div className={`col-md-6 col-lg-4  ${styles.row}   col-sm-6 `}>
            <Feature
              productName="Goes Here"
              oldCost="$123.00"
              newCost="$123.00"
              image="./FeaturedProducts/product-1.jpg"
              rating={5}
            />
          </div>

          <div className={`col-md-6 col-lg-4  ${styles.row}  col-sm-6  `}>
            <Feature
              productName="Goes Here"
              oldCost="$123.00"
              newCost="$123.00"
              image="./FeaturedProducts/product-2.jpg"
              rating={4.5}
            />
          </div>

          <div className={`col-md-6 col-lg-4  ${styles.row}  col-sm-6 `}>
            <Feature
              productName="Goes Here"
              oldCost="$123.00"
              newCost="$123.00"
              image="./FeaturedProducts/product-3.jpg"
              rating={3.5}
            />
          </div>

          <div className={`col-md-6 col-lg-4  ${styles.row}  col-sm-6 `}>
            <Feature
              productName="Goes Here"
              oldCost="$123.00"
              newCost="$123.00"
              image="./FeaturedProducts/product-4.jpg"
              rating={3}
            />
          </div>

          <div className={`col-md-6 col-lg-4  ${styles.row}  col-sm-6 `}>
            <Feature
              productName="Goes Here"
              oldCost="$123.00"
              newCost="$123.00"
              image="./FeaturedProducts/product-5.jpg"
              rating={5}
            />
          </div>

          <div className={`col-md-6 col-lg-4  ${styles.row}  col-sm-6 `}>
            <Feature
              productName="Goes Here"
              oldCost="$123.00"
              newCost="$123.00"
              image="./FeaturedProducts/product-6.jpg"
              rating={4.5}
            />
          </div>

          <div className={`col-md-6 col-lg-4  ${styles.row}  col-sm-6 `}>
            <Feature
              productName="Goes Here"
              oldCost="$123.00"
              newCost="$123.00"
              image="./FeaturedProducts/product-7.jpg"
              rating={3.5}
            />
          </div>

          <div className={`col-md-6 col-lg-4  ${styles.row}  col-sm-6 `}>
            <Feature
              productName="Goes Here"
              oldCost="$123.00"
              newCost="$123.00"
              image="./FeaturedProducts/product-8.jpg"
              rating={3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
