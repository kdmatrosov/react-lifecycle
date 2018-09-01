import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import Mounting from "./routes/Mounting";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/mounting" component={Mounting}/>
          <Redirect to="/mounting"/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
