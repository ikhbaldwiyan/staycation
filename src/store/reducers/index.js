import { combineReducers } from "redux";
import checkout from "./checkout";
import page from "./landingPage";

export default combineReducers({
  checkout,
  page
});