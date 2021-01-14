import React, { Component } from "react";
import styles from "../styles/Sign.module.css";

class SignUpForm extends Component {
  render() {
    return (
      <div>
        <h1 className={styles["form-head"]}>SignUp Form</h1>
        <div>
          <div>
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              className={styles["form-name"]}
            ></input>
          </div>
          <br />
          <div>
            <input
              type="text"
              name="email"
              required
              placeholder="email"
              className={styles["form-name"]}
            ></input>
          </div>
          <br />
          <div>
            <input
              type="password"
              name="password"
              required
              placeholder="password"
              className={styles["form-name"]}
            ></input>
          </div>
          <br />
          {/* <div>
            <input
              type="password"
              name="confirmPassword"
                required
              placeholder="confirm Password"
            ></input>
          </div> */}
          <br />
        </div>
      </div>
    );
  }
}
export default SignUpForm;
