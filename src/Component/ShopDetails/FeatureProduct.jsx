// import Feature from "./Featured_products/Feature"
import Feature from "../Featured_products/Feature";
import styles from "../Featured_products/Feature.module.css";
// eslint-disable-next-line react/prop-types
export default function FeatureProduct() {
  return (
    <div className="mt-1 mb-5">

      <div className={`container-fluid`}>
        <div className={`row`}>
          <div className={`col-md-4 col-lg-3  ${styles.row}   col-sm-6 `}>
            <Feature
              productName="Goes Here"
              oldCost="$123.00"
              newCost="$123.00"
              image="./FeaturedProducts/product-1.jpg"
              rating={5}
            />
          </div>

          <div className={`col-md-4 col-lg-3  ${styles.row}   col-sm-6   `}>
            <Feature
              productName="Goes Here"
              oldCost="$123.00"
              newCost="$123.00"
              image="./FeaturedProducts/product-2.jpg"
              rating={4.5}
            />
          </div>

          <div className={`col-md-4 col-lg-3  ${styles.row}   col-sm-6  `}>
            <Feature
              productName="Goes Here"
              oldCost="$123.00"
              newCost="$123.00"
              image="./FeaturedProducts/product-3.jpg"
              rating={3.5}
            />
          </div>

          <div className={`col-md-4 col-lg-3  ${styles.row}   col-sm-6  `}>
            <Feature
              productName="Goes Here"
              oldCost="$123.00"
              newCost="$123.00"
              image="./FeaturedProducts/product-4.jpg"
              rating={3}
            />
          </div>

        </div>
      </div>
    </div>
  );
}
