import PreHeader from "./PreHeader";
import styles from "./MidHeader.module.css";
import PostHeader from "./PostHeader";

import "../../App.css";

export default function Header() {
  return (
    <>
    <div style={{backgroundColor: "#f5f5f5"}}>
      <div className="PageContainer">
        <PreHeader />
      </div>
    </div>

      {/* mid  header*/}

      <nav className={`navbar ${styles.container}`}>
        <div className="container-fluid">
          <a className={`navbar-brand ${styles.small}`}>
            <img src="./logo1.png" alt="brand" />
          </a>

          <form
            className={`d-flex border border-2 ${styles.faram} border-success rounded-3`}
            role="search"
          >
            <input
              className="form-control border border-0"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn " type="submit">
              <i className="fa-solid fa-magnifying-glass text-success"></i>
            </button>
          </form>

          <div className={`${styles.customer}`}>
            <span>
              Customer Service
              <h3>+012 345 6789</h3>
            </span>
          </div>
        </div>
      </nav>

      {/* post header */}

      <PostHeader />
    </>
  );
}
