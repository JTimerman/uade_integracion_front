import fetchAPI from "../api/fetchAPI";
import { BASE_URL, PAYMENTS } from "../constants/endpoints.json";

export const payInvoice = payload => {
  let sentPayload = {
    ...payload,
    invoice_id: parseInt(payload.invoice_id)
  };

  if (payload.payment_method === "CREDITO") {
    sentPayload = {
      ...sentPayload,
      cvv: parseInt(payload.cvv),
      payments: parseInt(payload.payments)
    };
  }

  return fetchAPI(BASE_URL + PAYMENTS, "POST", sentPayload);
};
