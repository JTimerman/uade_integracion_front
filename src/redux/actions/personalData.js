import { SET_PERSONAL_DATA } from "./actionTypes.json";

export function setPersonalData(personalData) {
  return { type: SET_PERSONAL_DATA, personalData };
}
