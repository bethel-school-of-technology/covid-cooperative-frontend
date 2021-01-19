import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

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
