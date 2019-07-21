import { createStore } from "redux";
import allReducers from "../reducers";

const userStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default userStore;
