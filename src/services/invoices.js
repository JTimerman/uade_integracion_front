import fetchAPI from "../api/fetchAPI";
import { BASE_URL, PAYMENTS } from "../constants/endpoints.json";

export const payInvoice = payload => {
  return fetchAPI(BASE_URL + PAYMENTS, "POST", payload);
};
