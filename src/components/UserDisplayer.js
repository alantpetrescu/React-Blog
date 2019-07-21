import React from "react";
import { useDispatch } from "react-redux";
import userStore from "../store/userStore";

const UserDisplayer = ({ userId }) => {
  return (
    <div id="user-displayer">
      <h1>Welcome back</h1>
    </div>
  );
};

export default UserDisplayer;
