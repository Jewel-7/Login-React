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
    // let form = event.target;
    let credentials = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
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
                <div>
                  <button type="submit" value="submit">
                    Login
                  </button>
                  <button type="reset" value="clear">
                    Reset
                  </button>
                  <h2>Didnt sign up?</h2>
                  <Link to="/signup">
                    <button>Signup</button>
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
