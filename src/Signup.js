import React from 'react';

export default class Signup extends React.Component {
  render() {
    return (
      <div>
        <form>
          <h3>Sign up!</h3>
          <div>
            <input type="text" name="username" placeholder="Username" />
            <label htmlFor="username">Username</label>
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" />
            <label htmlFor="password">Password</label>
          </div>
          <input type="submit" value="Signup" />
        </form>
      </div>
    );
  };
}
