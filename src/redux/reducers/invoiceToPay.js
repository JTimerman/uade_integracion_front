import { SET_INVOICE_TO_PAY } from "../actions/actionTypes.json";

const initialState = {};

export default function invoiceToPay(state = initialState, action) {
  switch (action.type) {
    case SET_INVOICE_TO_PAY:
      return action.invoice;

    default:
      return state;
  }
}
