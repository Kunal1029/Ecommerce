import "../../../App.css";
import styles from "./Category.module.css";
import CategoryCard from "./CategoryCard";
export default function Categories() {
  return (
    <div className=" mt-5">
      <h2 className="text-uppercase text-secondary  mb-4">Categories</h2>

      <div className={`container-fluid`}>
        <div className={`row`}>
          <div className={`col-md-4 col-lg-3  ${styles.row}   col-sm-6 mb-3`}>
            <CategoryCard
              productName="Category Name"
              capacity="100 Products"
              img="./CategoryCardImg/cat-1.jpg"
            />
          </div>

          <div className={`col-md-4 col-lg-3  ${styles.row}  col-sm-6  mb-3`}>
            <CategoryCard
              productName="Category Name"
              capacity="100 Products"
              img="./CategoryCardImg/cat-2.jpg"
            />
          </div>

          <div className={`col-md-4 col-lg-3  ${styles.row}  col-sm-6 mb-3`}>
            <CategoryCard
              productName="Category Name"
              capacity="100 Products"
              img="./CategoryCardImg/cat-3.jpg"
            />
          </div>

          <div className={`col-md-4 col-lg-3  ${styles.row}  col-sm-6 mb-3`}>
            <CategoryCard
              productName="Category Name"
              capacity="100 Products"
              img="./CategoryCardImg/cat-4.jpg"
            />
          </div>

          <div className={`col-md-4 col-lg-3  ${styles.row}  col-sm-6 mb-3`}>
            <CategoryCard
              productName="Category Name"
              capacity="100 Products"
              img="./CategoryCardImg/cat-3.jpg"
            />
          </div>

          <div className={`col-md-4 col-lg-3  ${styles.row}  col-sm-6 mb-3`}>
            <CategoryCard
              productName="Category Name"
              capacity="100 Products"
              img="./CategoryCardImg/cat-4.jpg"
            />
          </div>

          <div className={`col-md-4 col-lg-3  ${styles.row}  col-sm-6 mb-3`}>
            <CategoryCard
              productName="Category Name"
              capacity="100 Products"
              img="./CategoryCardImg/cat-1.jpg"
            />
          </div>

          <div className={`col-md-4 col-lg-3  ${styles.row}  col-sm-6 mb-3`}>
            <CategoryCard
              productName="Category Name"
              capacity="100 Products"
              img="./CategoryCardImg/cat-2.jpg"
            />
          </div>

          <div className={`col-md-4 col-lg-3  ${styles.row}  col-sm-6 mb-3`}>
            <CategoryCard
              productName="Category Name"
              capacity="100 Products"
              img="./CategoryCardImg/cat-1.jpg"
            />
          </div>

          <div className={`col-md-4 col-lg-3  ${styles.row}  col-sm-6 mb-3`}>
            <CategoryCard
              productName="Category Name"
              capacity="100 Products"
              img="./CategoryCardImg/cat-2.jpg"
            />
          </div>

          <div className={`col-md-4 col-lg-3  ${styles.row}  col-sm-6 mb-3`}>
            <CategoryCard
              productName="Category Name"
              capacity="100 Products"
              img="./CategoryCardImg/cat-3.jpg"
            />
          </div>

          <div className={`col-md-4 col-lg-3  ${styles.row}  col-sm-6 mb-3`}>
            <CategoryCard
              productName="Category Name"
              capacity="100 Products"
              img="./CategoryCardImg/cat-4.jpg"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
}
