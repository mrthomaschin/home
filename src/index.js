import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { HashRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router basename="">
    <App />
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
