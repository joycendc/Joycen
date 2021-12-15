import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ScrollToTop from "./scrollToTop";

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
