import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Router } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

ReactDOM.render(
  <Router history={createHistory({ basename: process.env.PUBLIC_URL })}>
    <App />
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
