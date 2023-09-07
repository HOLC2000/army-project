import React from 'react';
import '../../scss/Login.scss';

const CreateAccount = () => {
  return (
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
        <a href="/log-in">Log-in</a>
      </div>
    </div>
  );
};

export default CreateAccount;
