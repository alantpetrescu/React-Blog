import React, { useContext } from "react";
import { BlogContext } from "../store/BlogContext";

const InfoDisplayer = ({ userId }) => {
  const [users, setUsers] = useContext(BlogContext);

  const displayUserInformation = () => {
    let numberOfPosts = 0;

    users[userId].threads.map(
      thread => (numberOfPosts += thread.number_of_posts)
    );

    return (
      <div>
        <h2>Threads: {users[userId].number_of_threads}</h2>
        <h2>Posts: {numberOfPosts}</h2>
      </div>
    );
  };

  return <div> {displayUserInformation()}</div>;
};

export default InfoDisplayer;
