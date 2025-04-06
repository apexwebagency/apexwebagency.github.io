import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./App.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* Wrap App with Router and include basename */}
    <Router basename="/alameenwebdesign.github.io">
      {" "}
      {/* Replace "my-website" with your actual repo name */}
      <App />
    </Router>
  </React.StrictMode>
);
