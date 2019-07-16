import React, { useContext } from "react";
import { BlogContext } from "../store/BlogContext";

const UserDisplayer = ({ userId }) => {
  const [users, setUsers] = useContext(BlogContext);

  return (
    <div id="user-displayer">
      <h1>Welcome back {users[userId].name}!</h1>
    </div>
  );
};

export default UserDisplayer;
