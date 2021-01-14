import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import SignUp from "../pages/Sign";
import Login from "../pages/Login";

class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/login" exact component={Login} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
export default Router;
