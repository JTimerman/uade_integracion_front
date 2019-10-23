import { combineReducers } from "redux";
import employees from "./employees";
import holders from "./holders";
import invoices from "./invoices";
import invoiceToPay from "./invoiceToPay";
import personalData from "./personalData";
import roles from "./roles";
import students from "./students";

export const reducers = combineReducers({
  employees,
  holders,
  invoices,
  invoiceToPay,
  personalData,
  roles,
  students
});
