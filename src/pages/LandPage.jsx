import { Component } from "react";
import { Link } from "react-router-dom";

import styles from "../styles/Land.module.css";

class Land extends Component {
  render() {
    return (
      <div className={styles["land-cont"]}>
        <h1 className={styles["land-head"]}>Thank You For Logging In</h1>
        <h2 className={styles["land-para"]}>
          Bored? Fell Free to LogOut
          <Link to={{ pathname: `/` }} style={{ textDecoration: "none" }}>
            <button className={styles["land-button"]}>Logout</button>
          </Link>
        </h2>
      </div>
    );
  }
}
export default Land;
