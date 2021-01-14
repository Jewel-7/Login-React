import { Link } from "react-router-dom";
import styles from "../styles/Nav.module.css";

function Navigation() {
  return (
    <nav className={styles["header-section"]}>
      <div className={styles["navigation"]}>
        <div className={styles["nav-flex"]}>
          <div className={styles["nav-link"]}>
            <Link to={{ pathname: `/` }} style={{ textDecoration: "none" }}>
              <p className={styles["nav-title"]}>Home</p>
            </Link>
          </div>
          <div className={styles["nav-link"]}>
            {" "}
            <Link
              to={{ pathname: `/signup` }}
              style={{ textDecoration: "none" }}
            >
              <p className={styles["nav-title"]}>Signup</p>
            </Link>
          </div>
          <div className={styles["nav-link"]}>
            {" "}
            <Link
              to={{ pathname: `/login` }}
              style={{ textDecoration: "none" }}
            >
              <p className={styles["nav-title"]}>Login</p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navigation;
