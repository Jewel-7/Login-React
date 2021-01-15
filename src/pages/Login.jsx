import { Component } from "react";
import LoginForm from "../components/LoginForm";
import url from "../services/fetchData";
import { Link } from "react-router-dom";
import styles from "../styles/Sign.module.css";

import Land from "./LandPage";

class Login extends Component {
  state = {
    status: "",
  };
  login = (event) => {
    event.preventDefault();

    let credentials = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(event.target.email.value) == false) {
      alert("Invalid Email Address");
      return false;
    } else {
      fetch(url + "user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(credentials),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          if (data.data) {
            this.setState({ status: "Successful" });
            event.target.reset();
          } else {
            alert(` Please try to sign up first:)`);
          }
        });
    }
  };
  render() {
    console.log(this.state.status);
    return (
      <div>
        {this.state.status === "Successful" ? (
          <Land />
        ) : (
          <div className={styles["sign-cont"]}>
            <div className={styles["sign-div"]}>
              <form onSubmit={this.login}>
                <LoginForm />
                <div className={styles["form-but"]}>
                  <button type="submit" value="submit">
                    Login
                  </button>
                  <button type="reset" value="clear">
                    Reset
                  </button>
                  <h2 className={styles["form-head"]}>Didnt sign up?</h2>
                  <Link to="/signup">
                    <button className={styles["form-but"]}>Signup</button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Login;
