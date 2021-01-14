import { Component } from "react";
import SignUpForm from "../components/SignForm";
import { Link } from "react-router-dom";
import styles from "../styles/Sign.module.css";

import url from "../services/fetchData";

class SignUp extends Component {
  signupUser = (event) => {
    event.preventDefault();
    // let form = event.target;
    let formObj = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
      // confirmPassword: form.confirmPassword.value,
    };
    console.log(formObj);
    fetch(url + "user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(formObj),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        event.target.reset();
        alert("Signed up Successfully.Please Login to continue!");
        console.log(data);
      })
      .catch((err) => {
        alert("User not found try signing up again");
        alert(err);
        console.log(err);
      });
  };
  render() {
    return (
      <div className={styles["sign-cont"]}>
        <div className={styles["sign-div"]}>
          <form onSubmit={this.signupUser}>
            <SignUpForm />
            <div className={styles["form-but"]}>
              <button type="submit" value="signUp">
                Sign Up
              </button>
              <button type="reset" value="Reset">
                Reset
              </button>
              <Link to="/login">
                <button className={styles["form-but1"]}>Login</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default SignUp;
