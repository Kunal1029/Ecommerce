import "../../App.css";
import Carousel from "./Carousel";
import Categories from "./Category/Categories";
import FeatureProduct from "./FeatureProduct";
import SecondCard from "./SecondCard";
import TwoPicComponent from "./TwoPicComponent";

export default function Home() {
  return (
    <div className="PageContainer">
      <Carousel />
      <SecondCard />
      <Categories />
      <FeatureProduct ProductType="FEATURED PRODUCTS"/>
      <TwoPicComponent />
      <FeatureProduct ProductType="RECENT PRODUCTS" />
    </div>
  )
}
