import fetchAPI from "../api/fetchAPI";
import { BASE_URL, PAYMENTS } from "../constants/endpoints.json";

export const payInvoice = payload => {
  const sentPayload = {
    ...payload,
    cvv: parseInt(payload.cvv),
    payments: parseInt(payload.payments),
    invoice_id: parseInt(payload.invoice_id)
  };

  return fetchAPI(BASE_URL + PAYMENTS, "POST", sentPayload);
};
