import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Components/home.js';
import Form from './Components/form.js';
import Login from './Components/login.js';
import Post from './Components/post.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



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
          <li><Link to="/login.js">Login</Link></li>
          <li><Link to="/form.js">Form</Link></li>
          <li><Link to="/post.js">Post</Link></li>

        </ul>

        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/login.js" component={Login} />
        <Route path="/form.js" component={Form} />
        <Route path="/post.js" component={Post} />
      </div>
    </Router>
  );
}

ReactDOM.render(<NINJA/>, document.getElementById('root'));


