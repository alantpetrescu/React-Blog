import React, { useContext } from "react";
import { BlogContext } from "../store/BlogContext";
import Comment from "./Comment";

const Post = ({ userId, threadId, postId }) => {
  const [users, setUsers] = useContext(BlogContext);

  const displayComments = () => {
    if (users[userId].threads[threadId].posts[postId].number_of_comments > 0) {
      return users[userId].threads[threadId].posts[postId].comments.map(
        (comment, commentId) => (
          <Comment
            key={commentId}
            userId={userId}
            threadId={threadId}
            postId={postId}
            commentId={commentId}
          />
        )
      );
    } else {
      return <p>We don't have comments in this post!</p>;
    }
  };

  return (
    <div className="post">
      <h2>{users[userId].threads[threadId].posts[postId].title}</h2>
      <h4>{users[userId].threads[threadId].posts[postId].creator}</h4>
      <p>{users[userId].threads[threadId].posts[postId].content}</p>

      {displayComments()}
    </div>
  );
};

export default Post;
