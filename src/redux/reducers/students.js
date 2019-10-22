import { SET_STUDENTS } from "../actions/actionTypes.json";

const initialState = [];

export default function students(state = initialState, action) {
  switch (action.type) {
    case SET_STUDENTS:
      return action.students;

    default:
      return state;
  }
}
