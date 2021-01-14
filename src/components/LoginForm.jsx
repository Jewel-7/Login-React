import React, { Component } from "react";
import styles from "../styles/Sign.module.css";

class LoginForm extends Component {
  render() {
    return (
      <div>
        <div>
          <h1 className={styles["form-head"]}>Login Form</h1>
          <div>
            <div>
              <input
                type="text"
                name="email"
                placeholder="email"
                className={styles["form-name"]}
                required
              ></input>
            </div>
            <br />
            <div>
              <input
                type="password"
                name="password"
                placeholder="password"
                className={styles["form-name"]}
                required
              ></input>
            </div>
            <br />
          </div>
        </div>
      </div>
    );
  }
}
export default LoginForm;
