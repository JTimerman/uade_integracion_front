import { SET_ABSENTEEISM } from "./actionTypes.json";

import { createAbsenteeism as createAbsenteeismService } from "../../services/absenteeism";

export function setAbsenteeism(absenteeism) {
  return { type: SET_ABSENTEEISM, absenteeism };
}

export const createAbsenteeism = absenteeism => {
  return () => createAbsenteeismService(absenteeism);
};
