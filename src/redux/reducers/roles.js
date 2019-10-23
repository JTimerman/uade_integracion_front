import { SET_ROLES } from "../actions/actionTypes.json";

const initialState = [];

export default function roles(state = initialState, action) {
  switch (action.type) {
    case SET_ROLES:
      return action.roles;

    default:
      return state;
  }
}
