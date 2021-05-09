import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter as Router } from "react-router-dom"
import SimpleReactLightbox from "simple-react-lightbox";

ReactDOM.render(
  <React.StrictMode >
    <Router basename="/">
    <SimpleReactLightbox>
      <App />
    </SimpleReactLightbox>
    </Router>
    
  </React.StrictMode>,
  document.getElementById("root")
);
