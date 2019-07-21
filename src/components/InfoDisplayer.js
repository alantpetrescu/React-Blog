import React from "react";
import { useDispatch } from "react-redux";
import userStore from "../store/userStore";

const InfoDisplayer = ({ userId }) => {
  return (
    <div>
      <h2>Threads: </h2>
      <h2>Posts: </h2>
    </div>
  );
};

export default InfoDisplayer;
