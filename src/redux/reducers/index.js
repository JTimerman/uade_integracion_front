import { combineReducers } from "redux";
import holders from "./holders";
import personalData from "./personalData";
import roles from "./roles";
import students from "./students";

export const reducers = combineReducers({
  holders,
  personalData,
  roles,
  students
});
