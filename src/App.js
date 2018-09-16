import React, { Component, StrictMode } from 'react';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Demo from "./routes/Demo";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <StrictMode>
          <div className="App">
            <Switch>
              <Route path="/demo" component={Demo} />
              <Redirect to="/demo" />
            </Switch>
          </div>
        </StrictMode>
      </BrowserRouter>
    );
  }
}

export default App;
