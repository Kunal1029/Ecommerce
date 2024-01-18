import Feature from "./Feature"
import styles from "./Feature.module.css"
// eslint-disable-next-line react/prop-types
export default function FeatureProduct({ProductType}) {
  return (
    <div className="mt-5 mb-5">
      <h1>{ProductType}</h1>

      <div className={`container-fluid`}>
        <div className={`row`}>
          <div className={`col-md-4 col-lg-3  ${styles.row}   col-sm-6 mb-3`}>
            <Feature
              productName="Goes Here"
               oldCost="$123.00" newCost="$123.00" 
              image="./FeaturedProducts/product-1.jpg" rating={5}
            />
            
          </div>

          <div className={`col-md-4 col-lg-3  ${styles.row}  col-sm-6  mb-3`}>
            <Feature
              productName="Goes Here"
               oldCost="$123.00" newCost="$123.00" 
              image="./FeaturedProducts/product-2.jpg"
              rating={4.5}
            />
          </div>

          <div className={`col-md-4 col-lg-3  ${styles.row}  col-sm-6 mb-3`}>
            <Feature
              productName="Goes Here"
               oldCost="$123.00" newCost="$123.00" 
              image="./FeaturedProducts/product-3.jpg"
              rating={3.5}
            />
          </div>

          <div className={`col-md-4 col-lg-3  ${styles.row}  col-sm-6 mb-3`}>
            <Feature
              productName="Goes Here"
               oldCost="$123.00" newCost="$123.00" 
              image="./FeaturedProducts/product-4.jpg"
              rating={3}
            />
          </div>

          <div className={`col-md-4 col-lg-3  ${styles.row}  col-sm-6 mb-3`}>
            <Feature
              productName="Goes Here"
               oldCost="$123.00" newCost="$123.00" 
              image="./FeaturedProducts/product-5.jpg"
              rating={5}
            />
          </div>

          <div className={`col-md-4 col-lg-3  ${styles.row}  col-sm-6 mb-3`}>
            <Feature
              productName="Goes Here"
               oldCost="$123.00" newCost="$123.00" 
              image="./FeaturedProducts/product-6.jpg"
              rating={4.5}
            />
          </div>

          <div className={`col-md-4 col-lg-3  ${styles.row}  col-sm-6 mb-3`}>
            <Feature
              productName="Goes Here"
               oldCost="$123.00" newCost="$123.00" 
              image="./FeaturedProducts/product-7.jpg"
              rating={3.5}
            />
          </div>

          <div className={`col-md-4 col-lg-3  ${styles.row}  col-sm-6 mb-3`}>
            <Feature
              productName="Goes Here"
               oldCost="$123.00" newCost="$123.00" 
              image="./FeaturedProducts/product-8.jpg"
              rating={3}
            />
          </div>



        </div>
        
      </div>
    </div>
  )
}
