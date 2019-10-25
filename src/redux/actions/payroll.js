import { SET_PAYROLL } from "./actionTypes.json";
import PayrollService from "../../services/payroll";

export const getPayroll = () => {
  return dispatch => {
    return PayrollService.getMonthly().then(payroll => {
      dispatch(setPayroll(payroll));
    });
  };
};

export function setPayroll(payroll) {
  return { type: SET_PAYROLL, payroll };
}
