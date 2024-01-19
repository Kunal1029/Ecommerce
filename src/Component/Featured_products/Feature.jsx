/* eslint-disable react/prop-types */

import Price from "./Price";

export default function Feature({
  productName,
  image,
  newCost,
  oldCost,
  rating,
}) {
  return (
    <div className="bg-white text-center mb-5">
      <img src={image} className="w-100 mb-4" alt="" />

      <div className="mb-3">
        <b>Product Name {productName}</b>
      </div>
      <Price newCost={newCost} oldCost={oldCost} />
      <div className="text-success mt-1">
        {rating == 5 ? (
          <span>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i> (99)
          </span>
        ) : rating == 4.5 ? (
          <span>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star-half-stroke"></i> (99)
          </span>
        ) : rating == 3.5 ? (
          <span>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star-half-stroke"></i>
            <i className="fa-regular fa-star"></i> (99)
          </span>
        ) : rating == 3 ? (
          <span>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i> (99)
          </span>
        ) : (
          ""
        )}
      </div>
      <div></div>
    </div>
  );
}
