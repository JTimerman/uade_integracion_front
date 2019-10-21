import { SET_ROLE } from "../actions/actionTypes.json";

const initialState = "";

export default function role(state = initialState, action) {
  switch (action.type) {
    case SET_ROLE:
      return action.role;

    default:
      return state;
  }
}
