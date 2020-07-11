import React from "react";
import {Switch, Route} from "react-router-dom";
import Home from "./App";
import Profile from "./components/Profile/Profile";
import Post from "./components/Post/Post";

export default (
  <Switch>
    <Route path="/post" component={Post} />
    <Route path="/profile" component={Profile} />
    <Route path="/" component={Home} />
  </Switch>
);
