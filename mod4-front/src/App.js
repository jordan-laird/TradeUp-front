import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import { HomePage } from "./views/HomePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { User } from "./components/User";
import { UserEdit } from "./components/UserEdit";
import { NavBar } from "./components/NavBar";
import { Login } from "./components/Login";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/companies" component={HomePage} />
            <Route path="/login" component={Login} />
            <Route path="/users/:id/edit" component={UserEdit} />
            <Route path="/users" component={User} />
            {/* <Route path="/SignUp" component={SignUp} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
