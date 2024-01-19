/* eslint-disable react/prop-types */
import styles from "./ShopHeader.module.css"

export default function ShopHeader({currPage , shop}) {
  return (
    <div className="mt-4 m-auto">
      <div className={`container-fluid bg-white d-flex align-items-center col-lg-12 col-md-11 col-sm-11 ${styles.ShopDetails}`}>
       
          <a href="" className={`ms-1 pt-2 pb-2 text-dark `}>Home /</a>
          <a href="" className={`ms-2 pt-2 pb-2 text-dark `}>{shop}</a>
          <a href="" className={`ms-2 pt-2 pb-2 text-secondary `}>{currPage} </a>
       
      </div>
    </div>
  );
}
