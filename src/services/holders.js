import fetchAPI from "../api/fetchAPI";
import { BASE_URL, HOLDERS } from "../constants/endpoints.json";

export const getHolders = () => {
  return fetchAPI(BASE_URL + HOLDERS, "GET");
};

export const getHolderById = id => {
  return fetchAPI(BASE_URL + HOLDERS + "/" + id, "GET");
};

export const deleteHolder = id => {
  return fetchAPI(BASE_URL + HOLDERS + "/" + id, "DELETE");
};

export const updateHolder = id => {
  return fetchAPI(BASE_URL + HOLDERS + "/" + id, "PUT");
};

export const createHolder = holder => {
  return fetchAPI(BASE_URL + HOLDERS, "POST", holder);
};
