import React, { Component } from "react";

class LoginForm extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Login Form</h1>
          <div>
            <div>
              <input
                type="text"
                name="email"
                placeholder="email"
                required
              ></input>
            </div>
            <br />
            <div>
              <input
                type="password"
                name="password"
                placeholder="password"
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
