import { SET_PAYMENTS } from "./actionTypes.json";
import { getPayments as getPaymentsService } from "../../services/payments";

export function setPayments(payments) {
  return { type: SET_PAYMENTS, payments };
}

export function getPayments() {
  return dispatch => {
    return getPaymentsService()
      .then(payments => {
        dispatch(setPayments(payments));
      })
      .catch(() => Promise.reject(false));
  };
}
