import { combineReducers } from "redux";
import employees from "./employees";
import holders from "./holders";
import personalData from "./personalData";
import roles from "./roles";
import students from "./students";
import services from "./services";

export const reducers = combineReducers({
  employees,
  holders,
  personalData,
  roles,
  students,
  services
});
