import React, { useContext } from "react";
import Nav from "../components/pageComponents/Nav";
import { useDispatch } from "react-redux";
import userStore from "../store/userStore";

const CreateThread = () => {
  return (
    <div id="create-thread">
      <Nav />
      <form>
        <label htmlFor="title">Title: </label>
        <input type="text" name="title" />
        <label htmlFor="description">Description: </label>
        <input type="text" name="description" />
        <input type="submit" value="Add thread" />
      </form>
    </div>
  );
};

export default CreateThread;
