import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home'



const About = () => {
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  )
}

const Login = () => {
  return (
    <div>
      <form>
        <div>
          <input type="text" name="username" palceholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

ReactDOM.render((
  <Router>
    <React.Fragment>
      <Route path="/" component={Home} />
      <Route exact path="/about" render={About} />
      <Route exact path="/login" render={Login} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
