const loginUser = payload => {
  return {
    type: "LOGIN_USER",
    payload
  };
};

export default loginUser;
