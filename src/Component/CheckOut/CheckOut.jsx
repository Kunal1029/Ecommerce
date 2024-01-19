import ShopHeader from "../PageLocater/ShopHeader";

export default function CheckOut() {
  return (
    <div className="container-fluid PageContainer">
      <ShopHeader currPage="Checkout" shop="shop /" />
      <div className="row">
        <div className="col-lg-8">
          <h4 className="mt-4 mb-2 ms-4">BILLING ADDRESS</h4>

          <div className="bg-white container-fluid">
            <div className="row p-3">
              <div className="col-md-6 form-group">
                <label className="mb-3 text-secondary mt-4">First Name</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="John"
                />
              </div>
              <div className="col-md-6  form-group">
                <label className="mb-3 text-secondary mt-4">Last Name</label>
                <input className="form-control" type="text" placeholder="Doe" />
              </div>
              <div className="col-md-6 form-group">
                <label className="mb-3 text-secondary mt-4">E-mail</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="example@email.com"
                />
              </div>
              <div className="col-md-6 form-group">
                <label className="mb-3 text-secondary mt-4">Mobile No</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="+123 456 789"
                />
              </div>
              <div className="col-md-6 form-group">
                <label className="mb-3 text-secondary mt-4">
                  Address Line 1
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="123 Street"
                />
              </div>
              <div className="col-md-6 form-group">
                <label className="mb-3 text-secondary mt-4">
                  Address Line 2
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="123 Street"
                />
              </div>
              <div className="col-md-6 form-group">
                <label className="mb-3 text-secondary mt-4 me-2">Country</label>
                <select className="custom-select border border-success rounded-2 p-1">
                  <option selected="">India</option>
                  <option>Afghanistan</option>
                  <option>Albania</option>
                  <option>Algeria</option>
                </select>
              </div>
              <div className="col-md-6 form-group">
                <label className="mb-3 text-secondary mt-4">City</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="New York"
                />
              </div>
              <div className="col-md-6 form-group">
                <label className="mb-3 text-secondary mt-4">State</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="New York"
                />
              </div>
              <div className="col-md-6 form-group">
                <label className="mb-3 text-secondary mt-4">ZIP Code</label>
                <input className="form-control" type="text" placeholder="123" />
              </div>
              <div className="col-md-12 form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="newaccount"
                  />
                  <label
                    className="mb-1 text-secondary custom-control-label mt-4 ms-2"
                    htmlFor="newaccount"
                  >
                    Create an account
                  </label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="shipto"
                  />
                  <label
                    className="mb-3 text-secondary custom-control-label mt-1 ms-2"
                    data-toggle="collapse"
                    data-target="#shipping-address"
                  >
                    Ship to different address
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`col-lg-4`}>
          <div className={`col-lg-12 col-md-7`}>
            <h4 className="mt-4 mb-2">Order Total</h4>
            <div className="bg-white">
              <p className="pt-3 mt-3 ms-4">
                <b>Products</b>
              </p>
              <div className="d-flex pt-1 mt-1 ms-4 me-3  text-secondary justify-content-between">
                <p>Product 1</p>
                <p>$150</p>
              </div>

              <div className="d-flex ms-4 me-3 text-secondary justify-content-between">
                <p>Product 2</p>
                <p>$150</p>
              </div>
              <div className="d-flex ms-4 me-3 text-secondary justify-content-between">
                <p>Product 3</p>
                <p>$150</p>
              </div>

              <hr />
              <div className="d-flex ms-4 me-3  justify-content-between">
                <p>SubTotal</p>
                <p>$450</p>
              </div>
              <div className="d-flex ms-4 me-3  justify-content-between">
                <p>Shipping</p>
                <p>$10</p>
              </div>

              <hr />
              <div className="d-flex mt-2 mb-3  ms-4 me-3 justify-content-between">
                <h4>Total</h4>
                <p>$460</p>
              </div>
            </div>

            <div className="bg-white mt-5">
              <div className="form-group pt-4 ms-4">
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    className="custom-control-input"
                    name="payment"
                    id="paypal"
                  />
                  <label className="custom-control-label ms-2">Paypal</label>
                </div>
              </div>
              <div className="form-group  pt-1  ms-4">
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    className="custom-control-input"
                    name="payment"
                    id="directcheck"
                  />
                  <label className="ms-2 custom-control-label">
                    Direct Check
                  </label>
                </div>
              </div>
              <div className="form-group mb-4  pt-1  ms-4">
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    className="custom-control-input "
                    name="payment"
                    id="banktransfer"
                  />
                  <label className="ms-2 custom-control-label">
                    Bank Transfer
                  </label>
                </div>
              </div>

              <div className="text-center">
                <button className="btn btn-block btn-success font-weight-bold py-2 mb-3">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
