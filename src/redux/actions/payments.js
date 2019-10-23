import { SET_PAYMENTS } from "./actionTypes.json";

export function setPayments(payments) {
  return { type: SET_PAYMENTS, payments };
}
