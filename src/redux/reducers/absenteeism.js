import { SET_ABSENTEEISM } from "../actions/actionTypes.json";

const initialState = {};

export default function absenteeism(state = initialState, action) {
  switch (action.type) {
    case SET_ABSENTEEISM:
      return action.absenteeism;

    default:
      return state;
  }
}
