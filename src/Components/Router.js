import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "Routes/Home";
import Show from "Routes/Show";
import Search from "Routes/Search";
import Header from "Components/Header";

export default () => (
  <Router>
    <Header />
    <Route path="/" exact component={Home}></Route>
    <Route path="/tv" exact component={Show}></Route>
    <Route path="/search" exact component={Search}></Route>
  </Router>
);
