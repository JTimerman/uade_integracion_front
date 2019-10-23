import fetchAPI from "../api/fetchAPI";
import { BASE_URL, HOLDERS } from "../constants/endpoints.json";

export const getHolders = () => {
  return fetchAPI(BASE_URL + HOLDERS, "GET").then(holders =>
    holders.map(holder => ({
      ...holder,
      holderid: holder.id,
      id: undefined,
      lastName: holder.last_name,
      last_name: undefined
    }))
  );
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

export const getHolderInvoces = id => {
  return fetchAPI(BASE_URL + HOLDERS + `/${id}/invoices`, "GET");
};

export const getHolderFees = id => {
  return fetchAPI(BASE_URL + HOLDERS + `/${id}/invoices`, "GET");
};
