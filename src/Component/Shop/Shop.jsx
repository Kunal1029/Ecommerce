import FeatureProduct from "./FeatureProduct";
import Filter from "./Filter";
import ShopHeader from "../PageLocater/ShopHeader";
import styles from "./ShopHeader.module.css";

export default function Shop() {

  return (
    <div className="PageContainer">
      <ShopHeader currPage="Shop List" />
      <div className={`${styles.FilterAndFeature}`}>
        <div className=" col-lg-3 col-md-4">
          <Filter filterType="All Price" filter="PRICE" filNum={1} />
          <Filter filterType="All Color" filter="COLOR" filNum={2} />
          <Filter filterType="All Size" filter="SIZE" filNum={3} />
        </div>
        <FeatureProduct ProductType="ks"/>
      </div>
    </div>
  );
}
