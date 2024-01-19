import styles from "./ShoppingCart.module.css"

export default function PlusMinus() {
  return (
    <div className={`input-group quantity ${styles.BtnPlusMinus}`}>
      <div className="input-group-btn ">
        <button className="btn btn-sm btn-success rounded-4 btn-minus">
          <i className="fa fa-minus"></i>
        </button>
      </div>
      <input
        type="text"
        className="form-control bg-dark text-white rounded-3 text-center w-25"
        value="1"
      />
      <div className="input-group-btn">
        <button className="btn btn-sm btn-success rounded-4 btn-plus">
          <i className="fa fa-plus"></i>
        </button>
      </div>
    </div>
  );
}
