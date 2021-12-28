import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
// Styles
import "normalize.css";
import "./styles/index.css";
import "./styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
