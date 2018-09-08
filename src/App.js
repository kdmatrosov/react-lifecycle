import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Mounting from "./routes/Mounting";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/mounting" component={Mounting}/>
            <Redirect to="/mounting"/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
