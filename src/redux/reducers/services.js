import { SET_SERVICES } from "../actions/actionTypes.json";

const initialState = [];

export default function services(state = initialState, action) {
  switch (action.type) {
    case SET_SERVICES:
      return action.services;

    default:
      return state;
  }
}
