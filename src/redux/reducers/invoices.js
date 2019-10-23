import { SET_INVOICES } from "../actions/actionTypes.json";

const initialState = [];

export default function invoices(state = initialState, action) {
  switch (action.type) {
    case SET_INVOICES:
      return action.invoices;

    default:
      return state;
  }
}
