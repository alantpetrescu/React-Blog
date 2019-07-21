const deletePost = payload => {
  return {
    type: "DELETE_POST",
    payload
  };
};

export default deletePost;
