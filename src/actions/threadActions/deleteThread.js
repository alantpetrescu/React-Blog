const deleteThread = payload => {
  return {
    type: "DELETE_THREAD",
    payload
  };
};

export default deleteThread;
