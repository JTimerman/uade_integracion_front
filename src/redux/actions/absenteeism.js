import { SET_ABSENTEEISM } from "./actionTypes.json";

export function setAbsenteeism(absenteeism) {
  return { type: SET_ABSENTEEISM, absenteeism };
}
