import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import { HomePage } from "./views/HomePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <HomePage /> {/*ask about this part */}
          <Switch>
            {/* <Route path="/users/:id/edit" component={UserEdit} />
            <Route path="/users/:id" component={UserDetail} />
            <Route path="/users" component={Users} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
