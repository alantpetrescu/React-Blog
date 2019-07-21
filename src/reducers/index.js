import { combineReducers } from "redux";
import userReducer from "./userReducer";
import loginReducer from "./loginReducer";
import threadReducer from "./threadReducer";

const allReducers = combineReducers({
  user: userReducer,
  login: loginReducer,
  thread: threadReducer
});

export default allReducers;
