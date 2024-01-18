import "./Home.css"

export default function TwoPicComponent() {
  return (
    <div className="container-fluid mt-5">
      <div className="TwoImgPart gap-4">
        <div className="offer1">
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
