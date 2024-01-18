/* eslint-disable react/prop-types */
import styles from "./Category.module.css"

export default function CategoryCard({ productName, capacity, img }) {

  return (
    
    <div className={`bg-white col-12 p-1 rounded-3 ${styles.row}`}>
      <div className={`${styles.SmallCard} `}>
        <div className={`${styles.smallCardImg}`}>
          <img src={img} alt="" />
        </div>

        <div className={`${styles.smallCardP}`} >
          <p>{productName}</p> 
          <p>{capacity}</p>
        </div>
      </div>
    </div>
  );
}
