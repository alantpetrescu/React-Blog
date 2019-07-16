import React, { useContext } from "react";
import { BlogContext } from "../store/BlogContext";

const Comment = ({ userId, threadId, postId, commentId }) => {
  const [users, setUsers] = useContext(BlogContext);

  return (
    <div className="comment">
      <h2>
        {
          users[userId].threads[threadId].posts[postId].comments[commentId]
            .title
        }
      </h2>
      <h4>
        {
          users[userId].threads[threadId].posts[postId].comments[commentId]
            .creator
        }
      </h4>
      <p>
        {
          users[userId].threads[threadId].posts[postId].comments[commentId]
            .content
        }
      </p>
    </div>
  );
};

export default Comment;
