import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Header from "./Header";

export default () => (
  <Router>
    <Header />
    <Route path="/" exact component={Home}></Route>
    <Route path="/tv" exact component={TV}></Route>
    <Route path="/search" exact component={Search}></Route>
  </Router>
);
