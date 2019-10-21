import { SET_PERSONAL_DATA } from "../actions/actionTypes.json";

const initialState = {};

export default function personalData(state = initialState, action) {
  switch (action.type) {
    case SET_PERSONAL_DATA:
      return action.personalData;

    default:
      return state;
  }
}
