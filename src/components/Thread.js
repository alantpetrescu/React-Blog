import React, { useContext } from "react";
import Post from "./Post";
import { BlogContext } from "../store/BlogContext";

const Thread = ({ userId, threadId }) => {
  const [users, setUsers] = useContext(BlogContext);

  const displayPosts = () => {
    if (users[userId].threads[threadId].number_of_posts > 0) {
      return users[userId].threads[threadId].posts.map((post, postId) => (
        <Post
          key={postId}
          userId={userId}
          threadId={threadId}
          postId={postId}
        />
      ));
    } else {
      return <p>We don't have posts in this thread!</p>;
    }
  };

  return (
    <div className="thread">
      <h2>{users[userId].threads[threadId].title}</h2>
      <h4>{users[userId].threads[threadId].creator}</h4>
      <p>{users[userId].threads[threadId].description}</p>

      {displayPosts()}
    </div>
  );
};

export default Thread;
