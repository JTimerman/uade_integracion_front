import fetchAPI from "../api/fetchAPI";
import { BASE_URL, EMPLOYEES } from "../constants/endpoints.json";

export const createAbsenteeism = absenteeism => {
  const { id, ...payload } = absenteeism;

  return fetchAPI(BASE_URL + EMPLOYEES + `/${id}/absences`, "POST", payload);
};
