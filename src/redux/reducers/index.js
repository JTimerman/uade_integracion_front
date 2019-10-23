import { combineReducers } from "redux";
import employees from "./employees";
import filters from "./filters";
import holders from "./holders";
import invoices from "./invoices";
import invoiceToPay from "./invoiceToPay";
import payments from "./payments";
import personalData from "./personalData";
import roles from "./roles";
import students from "./students";
import services from "./services";

export const reducers = combineReducers({
  employees,
  filters,
  holders,
  invoices,
  invoiceToPay,
  payments,
  personalData,
  roles,
  students,
  services
});
