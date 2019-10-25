import { SET_PAYROLL } from "../actions/actionTypes.json";

const initialState = null;

export default function payroll(state = initialState, action) {
  switch (action.type) {
    case SET_PAYROLL:
      return action.payroll;

    default:
      return state;
  }
}
