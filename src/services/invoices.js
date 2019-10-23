import fetchAPI from "../api/fetchAPI";
import { BASE_URL, INVOICES } from "../constants/endpoints.json";

export const payInvoice = (invoiceID, payload) => {
  return fetchAPI(
    BASE_URL + INVOICES + `/${invoiceID}/payments`,
    "POST",
    payload
  );
};
