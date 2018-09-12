import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Demo from "./routes/Demo";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/demo" component={Demo} />
            <Redirect to="/demo" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
