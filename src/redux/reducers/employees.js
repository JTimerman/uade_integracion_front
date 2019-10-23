import { SET_EMPLOYEES } from "../actions/actionTypes.json";

const initialState = [];

export default function employees(state = initialState, action) {
  switch (action.type) {
    case SET_EMPLOYEES:
      return action.employees;

    default:
      return state;
  }
}
