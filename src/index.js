import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./assets/scss/style.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Web3Provider from "./provider/web3";
import AppState from "./provider/appContext";
ReactDOM.render(
  <Web3Provider>
    <AppState>
      <App />
    </AppState>
  </Web3Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
