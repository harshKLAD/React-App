import React from "react";
import ReactDOM from "react-dom";
import MyInfo from "./components/MyInfo";
import App2 from "./components/app";
import "./components/appCSS.css";

ReactDOM.render(
  <div>
    <App2 className="app" />
    <MyInfo />
    <App2 />
  </div>,
  document.getElementById("root")
);
