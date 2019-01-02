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

class App extends Component {
  fetchCurrentPrice = (companySymbol) => {
    fetch(`https://api.iextrading.com/1.0/stock/${companySymbol}/chart/1d`)
      .then(res => res.json())
      .then(prices => prices.length ?
        this.setState({ currentPrice: prices[prices.length - 1] }) : null)
  }

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
            <Route path="/Portfolio" component={Portfolio} />
            <Route path="/SignUp" component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
