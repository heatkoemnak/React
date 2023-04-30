import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const navbar = (
  <nav>
    <ul>
      <li>
        <a href="index.html">Home</a>
      </li>
      <li>
        <a href="about.html">About</a>
      </li>
      <li>
        <a href="contact.html">Contact</a>
      </li>
  
    </ul>
  </nav>
);

const footer = (
    <footer>
        <p>© 2020</p>
    </footer>
);

const app = (
    <div>
        {navbar}
        <h1>My App</h1>
        <p>This is my app</p>
        {footer}
    </div>
);

ReactDOM.render(app, document.getElementById("root"));
