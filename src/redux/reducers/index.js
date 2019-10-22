import { combineReducers } from "redux";
import holders from "./holders";
import personalData from "./personalData";
import role from "./role";

export const reducers = combineReducers({
  holders,
  personalData,
  role
});
