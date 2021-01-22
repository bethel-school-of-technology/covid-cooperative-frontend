import "./App.css";
import React from "react";
import Navigation from "./Components/Nav";
import Home from "./Components/home.js";
import Signup from "./Components/Signup.js";
import Login from "./Components/login.js";
import Post from "./Components/post.js";
import PostFeed from "./Components/postFeed.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from './private'; //privateroute notes...

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/form" component={Signup} />
          <Route path="/post" component={Post} />
          <Route path="/postFeed" component={PostFeed} />
          <PrivateRoute
            path="/admin"
            Component={Home}
            isAuthenticated={false}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
