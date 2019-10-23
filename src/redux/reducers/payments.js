import { SET_PAYMENTS } from "../actions/actionTypes.json";

const initialState = [];

export default function payments(state = initialState, action) {
  switch (action.type) {
    case SET_PAYMENTS:
      return action.payments;

    default:
      return state;
  }
}
