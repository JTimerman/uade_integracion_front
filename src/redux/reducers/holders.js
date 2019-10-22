import { SET_HOLDERS } from "../actions/actionTypes.json";

const initialState = [];

export default function holders(state = initialState, action) {
  switch (action.type) {
    case SET_HOLDERS:
      return action.holders;

    default:
      return state;
  }
}
