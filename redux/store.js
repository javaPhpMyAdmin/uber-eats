import { createStore } from "redux";
import reducer from "./reducers/index";

export default configureStore = (initialState) => {
  const store = createStore(reducer, initialState);
  return store;
};
