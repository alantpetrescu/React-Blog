import React from "react";
import Thread from "../Thread";
import UserDisplayer from "../UserDisplayer";
import InfoDisplayer from "../InfoDisplayer";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const HomeBody = ({ userId }) => {
  const dispatcher = useDispatch();

  return (
    <div className="home-body">
      <Link to="/create-thread">
        <button>Add Thread</button>
      </Link>
      <Link to="/create-user">
        <button>Create User</button>
      </Link>
    </div>
  );
};

export default HomeBody;
