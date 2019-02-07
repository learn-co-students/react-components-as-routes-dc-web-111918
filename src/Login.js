import React from 'react';

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <h3>Log In!</h3>
          <div>
            <input type="text" name="username" placeholder="Username" />
            <label htmlFor="username">Username</label>
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" />
            <label htmlFor="pasword">Password</label>
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  };
}
