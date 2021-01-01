import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import { App } from "./containers/App/App.container";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("cv")
);
