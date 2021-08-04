import React from "react";
import ReactDOM from "react-dom";

const fName = "binal";
const mName = "p";
ReactDOM.render(
  <div>
    <h1>
      fruit list {fName}
      {mName}
    </h1>
    <ul>
      <li>apple</li>
      <li>banana</li>
    </ul>
  </div>,
  document.getElementById("root")
);
//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
