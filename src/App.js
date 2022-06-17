import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./RouteLink";


import "./App.css";

const  App = () => {


  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
