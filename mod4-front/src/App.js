import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import { HomePage } from "./views/HomePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { User } from "./components/User";
import { UserEdit } from "./components/UserEdit";
import { NavBar } from "./components/NavBar";
import { Login } from "./components/Login";
import { Portfolio } from "./components/Portfolio";
import { SignUp } from "./components/SignUp";
import { PrivateRoute } from "./components/PrivateRoute";
// import { Logout } from "./components/Logout";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <PrivateRoute path="/companies" component={HomePage} />
            <Route path="/login" component={Login} />
            {/* <Route path="/logout" component={Logout} /> */}
            <PrivateRoute path="/users/:id/edit" component={UserEdit} />
            <PrivateRoute path="/users" component={User} />
            <PrivateRoute path="/Portfolio" component={Portfolio} />
            <Route path="/SignUp" component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
