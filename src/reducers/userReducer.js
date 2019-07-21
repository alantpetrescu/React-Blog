const userReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_USER":
      return [...state, { ...action.payload.informations }];
    case "CHANGE_INFORMATIONS_USER":
      let newState = [...state];
      newState[action.payload.userId] = { ...action.payload.informations };
      return [...newState];
    default:
      return [...state];
  }
};

export default userReducer;
