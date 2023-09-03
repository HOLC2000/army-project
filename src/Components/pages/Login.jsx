
import React from 'react';
import '../../scss/Login.scss';

const Login = () => {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="create-account-link">
        <p>Don't have an account?</p>
        <a href="/create-account">Create Account</a>
      </div>
    </div>
  );
};

export default Login;
