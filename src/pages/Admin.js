import React from "react";

const Admin = () => {
  return (
    <div id="admin">
      <h1>Login</h1>

      <form id="login-form">
        <div className="user-input">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="user-input">
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password" />
        </div>
        <input id="button-login" type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Admin;
