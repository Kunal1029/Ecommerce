import "./Home.css";

export default function Carousel() {
  return (
    <div className="of12 me-1 ms-1 gap-1 k">
      <div
        id="carouselExampleDark"
        className="carousel slide col-lg-8 col-12 mt-3"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active bg-success border border-3 border-success rounded-2"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            className=" bg-success  border border-3 border-success rounded-2"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className=" bg-success  border border-3 border-success rounded-2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            {/* <img src="./carousel1.jpg" className="w-100" alt="..." /> */}
            <div className="Carousel1 ">
              <div className="carousel-caption">
                <h1>Men Fashion</h1>
                <p>
                  Man Fashion, men outfits, summer outfit men,. See more ideas
                  about mens outfits, summer outfits men, mens fashion.
                </p>
                <button
                  type="button"
                  className="btn btn-outline-success text-white"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="Carousel2">
              {/* <img src="./carousel2.jpg" className=" w-100" alt="..." /> */}

              <div className="carousel-caption ">
                <h1>Women Fashion</h1>
                <p>
                  Browse the latest Dresses for Women, Ethnic Wear for Women,
                  Footwear for Women, & much more at the best prices. Genuine
                  Products.
                </p>
                <button type="button" className="btn btn-outline-success">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="Carousel3">
              {/* <img src="./carousel3.jpg" className=" w-100" alt="..." /> */}
              <div className="carousel-caption">
                <h1>Kids Fashion</h1>
                <p>
                  Kids Fashion: Shop for Kids Clothing and Fashion online at
                  best prices in India.
                </p>
                <button type="button" className="btn btn-outline-success">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>

      <div className="col-lg-4 col-12 mt-3 me-1">
        <div className="offer1 ">
          <p>SAVE 20%</p>
          <h1>Special Offer</h1>
          <button type="button" className="btn btn-success text-white">
            Shop Now
          </button>
        </div>
        <div className="offer2">
          <p>SAVE 20%</p>
          <h1>Special Offer</h1>
          <button type="button" className="btn btn-success text-white">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
