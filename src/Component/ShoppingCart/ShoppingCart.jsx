import ShopHeader from "../PageLocater/ShopHeader";
import PlusMinus from "./PlusMinus";
import styles from "./ShoppingCart.module.css";
import CartImg from "./CartImg";

export default function ShoppingCart() {
  return (
    <div className="PageContainer">
      <ShopHeader currPage="Shopping Cart" shop="shop /" />
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-lg-7 table-responsive-md">
            <table className="table table-borderless text-center table-hover table-sm ">
              <thead className="">
                <tr className={`${styles.tableTR}`}>
                  <th scope="col">Products</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>

              <tbody>
                <tr className={`${styles.tableTR}`}>
                  <td>
                    <CartImg
                      imgPath="./CategoryCardImg/cat-1.jpg"
                      ProductName="Ladki"
                    />
                  </td>
                  <td>$150</td>
                  <td>
                    <PlusMinus />
                  </td>
                  <td>$150</td>
                  <td>
                    <i className="fa-solid fa-delete-left fa-2xl text-success"></i>
                  </td>
                </tr>
                <tr className={`${styles.tableTR}`}>
                  <td>
                    <CartImg
                      imgPath="./CategoryCardImg/cat-2.jpg"
                      ProductName="Camera"
                    />
                  </td>
                  <td>$150</td>
                  <td>
                    <PlusMinus />
                  </td>
                  <td>$150</td>
                  <td>
                    <i className="fa-solid fa-delete-left fa-2xl text-success"></i>
                  </td>
                </tr>
                <tr className={`${styles.tableTR}`}>
                  <td>
                    <CartImg
                      imgPath="./CategoryCardImg/cat-3.jpg"
                      ProductName="Product Name"
                    />
                  </td>
                  <td>$150</td>
                  <td>
                    <PlusMinus />
                  </td>
                  <td>$150</td>
                  <td>
                    <i className="fa-solid fa-delete-left fa-2xl text-success"></i>
                  </td>
                </tr>
                <tr className={`${styles.tableTR}`}>
                  <td>
                    <CartImg
                      imgPath="./CategoryCardImg/cat-4.jpg"
                      ProductName="Product Name"
                    />
                  </td>
                  <td>$150</td>
                  <td>
                    <PlusMinus />
                  </td>
                  <td>$150</td>
                  <td>
                    <i className="fa-solid fa-delete-left fa-2xl text-success"></i>
                  </td>
                </tr>
                <tr className={`${styles.tableTR}`}>
                  <td>
                    <CartImg
                      imgPath="./CategoryCardImg/cat-1.jpg"
                      ProductName="Ladki"
                    />
                  </td>
                  <td>$150</td>
                  <td>
                    <PlusMinus />
                  </td>
                  <td>$150</td>
                  <td>
                    <i className="fa-solid fa-delete-left fa-2xl  text-success"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={`col-lg-4 text-center`}>
            <div className={`col-lg-12 col-md-7  ${styles.checkout} text-center`}>
              <form className="text-center" action="">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control border-0 p-3"
                    placeholder="Coupon Code"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-success p-3">
                      Apply Coupon
                    </button>
                  </div>
                </div>
              </form>

              <h4 className="mt-5">CART SUMMARY</h4>
              <div className="bg-white">
                <div className="d-flex pt-4 mt-3 ms-4 me-3  justify-content-between">
                  <p>Subtotal</p>
                  <p>$150</p>
                </div>

                <div className="d-flex ms-4 me-3 justify-content-between">
                  <p>Shipping</p>
                  <p>$10</p>
                </div>

                <hr />
                <div className="d-flex mt-2 ms-4 me-3 justify-content-between">
                  <p>Total</p>
                  <p>$160</p>
                </div>
                <div className="text-center pb-3">
                  <button className="bg-success text-white p-3 border border-0 rounded-3">
                    Proceed to CheckOut
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
