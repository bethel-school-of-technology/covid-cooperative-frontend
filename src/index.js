import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Components/home.js';
import Form from './Components/form.js';
import Login from './Components/login.js';
import Post from './Components/post.js';
import postFeed from './Components/postFeed'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function NINJA() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/form">Form</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/post">Post</Link></li>

        </ul>

        <hr />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/form" component={Form} />
        <Route path="/post" component={Post} />
        <Route path="/postFeed" component={postFeed} />
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(<NINJA/>, document.getElementById('root'));


