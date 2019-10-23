import { SET_ROLES } from "./actionTypes.json";

export function setRoles(roles) {
  return { type: SET_ROLES, roles };
}
