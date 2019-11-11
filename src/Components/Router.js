import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "Routes/Home";
import Show from "Routes/Show";
import Search from "Routes/Search";

export default () => (
  <Router>
    <Route path="/" exact component={Home}></Route>
    <Route path="/tv" exact component={Show}></Route>
    <Route path="/search" exact component={Search}></Route>
  </Router>
);