const deleteComment = payload => {
  return {
    type: "DELETE_COMMENT",
    payload
  };
};

export default deleteComment;
