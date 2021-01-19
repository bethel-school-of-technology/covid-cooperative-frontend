import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Nav from "./Components/Nav";
import Home from "./Components/home.js";
import Signup from "./Components/Signup.js";
import Login from "./Components/login.js";
import Post from "./Components/post.js";
import postFeed from "./Components/postFeed.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// function NINJA() {
//   return ( 
//     <div>
//     <Nav/>
//     <Router>
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/login" component={Login} />
//         <Route path="/form" component={Signup} />
//         <Route path="/post" component={Post} />
//         <Route path="/postFeed" component={postFeed} />
//       </Switch>
//     </Router>
//     </div>
//   );
// }

// ReactDOM.render(<NINJA />, document.getElementById("root"));
