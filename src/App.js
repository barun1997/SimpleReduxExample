import React, { Component } from "react";
import formatNumber from "format-number";
import photographer from "./images/2.jpg";
import "./App.css";
import {store } from "./store";
import ButtonGroup from "./ButtonGroup"


class App extends Component {
  render() {
    const { totalAmount, username } = store.getState();
    return (
      <div className="App">
        <img className="App__userpic" src={photographer} alt="user" />
        <p className="App__username">Hello, {username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
        <ButtonGroup deposits={["10000","5000"]}/> 
        </section>
      </div>
    );
  }
}

export default App;
