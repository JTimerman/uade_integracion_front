import { ADD_FILTER } from "./actionTypes.json";

export function addFilter({ field, type, filter }) {
  return { type: ADD_FILTER, filterType: type, filter, field };
}
