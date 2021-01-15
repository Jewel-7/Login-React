import { Component } from "react";
import SignUpForm from "../components/SignForm";
import { Link } from "react-router-dom";
import styles from "../styles/Sign.module.css";
import Login from "../pages/Login";
import url from "../services/fetchData";

class SignUp extends Component {
  state = {
    status: "",
  };
  signupUser = (event) => {
    event.preventDefault();
    let credentials = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
      confirmPassword: event.target.confirmPassword.value,
    };
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(event.target.email.value) == false) {
      alert("Invalid Email Address");
      return false;
    }
    if (event.target.password.value !== event.target.confirmPassword.value) {
      alert("passwords dont match");
    } else {
      console.log(credentials);
      fetch(url + "user/signup", {
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
          event.target.reset();
          this.setState({ status: "Successful" });
          alert("Signed up Successfully.Please Login to continue!");
          console.log(data);
        })
        .catch((err) => {
          alert(
            "User not found --Enter proper credentials  and try  signing up again"
          );
          alert(err);
          console.log(err);
        });
    }
  };
  render() {
    return (
      <div>
        {this.state.status === "Successful" ? (
          <Login />
        ) : (
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
        )}
      </div>
    );
  }
}
export default SignUp;
