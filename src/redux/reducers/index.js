import { combineReducers } from "redux";
import personalData from "./personalData";
import role from "./role";

export const reducers = combineReducers({
  personalData,
  role
});
