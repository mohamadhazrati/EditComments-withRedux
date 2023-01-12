import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { posts } from "./reducer";
const reducers = combineReducers({ posts });
const middleWare = [thunk];
const data = JSON.parse(localStorage.getItem("posts"))
  ? JSON.parse(localStorage.getItem("posts"))
  : [];
const initialState = { posts: { data: [...data], loading: false, error: "" } };
const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleWare)
);
export default store;
