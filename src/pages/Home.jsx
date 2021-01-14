import { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";

class Home extends Component {
  render() {
    return (
      <div className={styles["home-cont"]}>
        <img
          className={styles["banner-img"]}
          src="https://i0.wp.com/boingboing.net/wp-content/uploads/2018/12/agifcolossaltd2opt.gif?fit=1&resize=620%2C4000&ssl=1"
          alt=""
        />
        <div className={styles["home-div"]}>
          {/* <Link to="/signup">
            <button>Signup</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link> */}
          <p>Welcome</p>
          <p>- If new User Please Sign up</p>
          <p>- If Sign Up done then Login</p>
        </div>
      </div>
    );
  }
}
export default Home;
