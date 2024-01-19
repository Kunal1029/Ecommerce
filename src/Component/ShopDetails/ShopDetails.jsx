import ShopHeader from "../PageLocater/ShopHeader";
import FeatureProduct from "./FeatureProduct";

export default function ShopDetails() {
  return (
    <div className="PageContainer">
      <ShopHeader currPage="Shop Details" shop="shop /" />
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-5">
            {/* carousel */}

            <div
              id="carouselExampleInterval"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="1000">
                  <img
                    src="./FeaturedProducts/product-1.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item" data-bs-interval="1000">
                  <img
                    src="./FeaturedProducts/product-2.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item" data-bs-interval="1000">
                  <img
                    src="./FeaturedProducts/product-3.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item" data-bs-interval="1000">
                  <img
                    src="./FeaturedProducts/product-4.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item" data-bs-interval="1000">
                  <img
                    src="./FeaturedProducts/product-5.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item" data-bs-interval="1000">
                  <img
                    src="./FeaturedProducts/product-6.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev"
              >
                {/* <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span> */}
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
              >
                {/* <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span> */}
                <span className="visually-hidden">Next</span>
              </button>
            </div>

            {/* carousel end */}
          </div>

          <div className="col-md-7 bg-white">
            <h1>Product Name Goes Here</h1>
            <span>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star-half-stroke"></i>
              <i className="fa-regular fa-star"></i> (99 Reviews)
            </span>
            <h2>$150.00</h2>
            <p>
              A product detail page, also known as a PDP, is a web page on an
              eCommerce website that provides information on a specific product.
              This information includes size, color, price, shipping
              information, reviews, and other relevant information customers
              want to know before purchasing.
            </p>

            <div className="d-flex mb-3">
              <strong className="text-dark mr-3">Sizes:</strong>
              <form className="d-flex gap-3 ms-4">
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="size-1"
                    name="size"
                  />
                  <label className="custom-control-label" htmlFor="size-1">
                    XS
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="size-2"
                    name="size"
                  />
                  <label className="custom-control-label" htmlFor="size-2">
                    S
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="size-3"
                    name="size"
                  />
                  <label className="custom-control-label" htmlFor="size-3">
                    M
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="size-4"
                    name="size"
                  />
                  <label className="custom-control-label" htmlFor="size-4">
                    L
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="size-5"
                    name="size"
                  />
                  <label className="custom-control-label" htmlFor="size-5">
                    XL
                  </label>
                </div>
              </form>
            </div>

            <div className="d-flex mb-3">
              <strong className="text-dark mr-3">Colors:</strong>
              <form className="d-flex gap-3 ms-4">
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="size-1"
                    name="size"
                  />
                  <label className="custom-control-label" htmlFor="size-1">
                    Black
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="size-2"
                    name="size"
                  />
                  <label className="custom-control-label" htmlFor="size-2">
                    White
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="size-3"
                    name="size"
                  />
                  <label className="custom-control-label" htmlFor="size-3">
                    Red
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="size-4"
                    name="size"
                  />
                  <label className="custom-control-label" htmlFor="size-4">
                    Blue
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="size-5"
                    name="size"
                  />
                  <label className="custom-control-label" htmlFor="size-5">
                    Green
                  </label>
                </div>
              </form>
            </div>

            <div className="d-flex  gap-4  ">

              <div className="input-group quantity " style={{width: "130px" , height:"38px"}}>

                <div className="input-group-btn " >

                  <button className="btn btn-success rounded-0">
                    <i className="fa fa-minus"></i>
                  </button>
                </div>

                <input 
                  type="text"
                  className="form-control bg-dark text-white text-center"
                  value="1"
                />

                <div className="input-group-btn">

                  <button className="btn btn-success rounded-0">
                    <i className="fa fa-plus"></i>
                  </button>

                </div>

              </div>

              <button className="btn btn-success px-3">
                <i className="fa fa-shopping-cart"></i> Add To Cart
              </button>

            </div>


            <div className="mt-4 d-flex gap-3 align-items-center"><b>Share on:</b>
               <i className="fa-brands fa-facebook-f"></i>
               <i className="fa-brands fa-x-twitter"></i>
               <i className="fa-brands fa-linkedin-in"></i>
               <i className="fa-brands fa-pinterest"></i>
               </div>
          </div>
        </div>


        {/* description / information / reviews */}
        <div></div>
        {/* description end */}
        
        <div className="mt-5">
          <h1>YOU MAY ALSO LIKE</h1>
          <FeatureProduct />
        </div>
        
      </div>
    </div>
  );
}
