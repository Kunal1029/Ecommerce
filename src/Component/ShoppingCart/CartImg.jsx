/* eslint-disable react/prop-types */
import styles from "./ShoppingCart.module.css"
export default function CartImg({imgPath , ProductName}) {
  return (
    <div style={{width:"80%"}} className="d-flex justify-content-evenly gap-3">
      <img src={imgPath} alt=""  className={` ${styles.cartImg}`} />
      <p>{ProductName}</p>
    </div>
  )
}
