import React from "react";
import { useDispatch, useSelector } from "react-redux";
import userActions from "../actions/userActions";

const Admin = props => {
  let nameValue = "";
  let passwordValue = "";
  let usersInformations = useSelector(state => state.user);

  const dispatcher = useDispatch();

  const handleChangeName = event => {
    nameValue = event.target.value;
  };

  const handleChangePassword = event => {
    passwordValue = event.target.value;
  };

  const handleLogin = event => {
    event.preventDefault();
    dispatcher(
      userActions.ADD_USER({
        userId: usersInformations.length,
        informations: { name: nameValue, password: passwordValue }
      })
    );
  };

  return (
    <div id="admin">
      <h1>Create User</h1>

      <form id="login-form" onSubmit={handleLogin}>
        <div className="user-input">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChangeName}
          />
        </div>
        <div className="user-input">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChangePassword}
          />
        </div>
        <input id="button-login" type="submit" value="Add user" />
      </form>
    </div>
  );
};

export default Admin;
