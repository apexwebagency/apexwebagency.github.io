import React from "react";
import ReactDOM from "react-dom/client";
import {HashRouter as Router} from "react-router-dom";
import App from "./App.js";
import "./styles/global.css"; // Import global styles

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {" "}
    {/* ✅ Wrap App with Router */}
    <App />
  </React.StrictMode>
);
