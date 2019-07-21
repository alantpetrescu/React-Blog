import React from "react";
import Post from "./Post";
import userStore from "../store/userStore";
import { useDispatch } from "react-redux";

const Thread = ({ userId, threadId }) => {
  const dispatcher = useDispatch(userStore);

  return <div className="thread" />;
};

export default Thread;
