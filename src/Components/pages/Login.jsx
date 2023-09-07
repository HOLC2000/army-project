import React, { useState } from 'react';
import '../../scss/Login.scss';

const Login = () => {
  const [logIn, setLogIn] = useState(true);

  const handlePageChange = () => {
    setLogIn(!logIn);
    console.log(logIn);
  };

  const layoutLog = (
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
        <button onClick={handlePageChange} className="change-page">
          Create Account
        </button>
      </div>
    </div>
  );
  const layoutCreate = (
    <div className="login-container">
      <h1>Sign-up</h1>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Create Account</button>
      </form>
      <div className="create-account-link">
        <p>Already have an account?</p>
        <button onClick={handlePageChange} className="change-page">
          Log in
        </button>
      </div>
    </div>
  );

  return (
    <>
      {logIn && layoutCreate}
      {!logIn && layoutLog}
    </>
  );
};
export default Login;
