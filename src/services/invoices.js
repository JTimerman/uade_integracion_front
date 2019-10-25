import fetchAPI from "../api/fetchAPI";
import { BASE_URL, PAYMENTS, INVOICES } from "../constants/endpoints.json";

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

export const getInvoices = () => {
  return fetchAPI(BASE_URL + INVOICES, "GET").then(invoices =>
    invoices.map(invoice => ({
      ...invoice,
      formatDate: invoice.date.split("T")[0],
      amountPaid: invoice.amount + " $AR",
      holderName: invoice.student.holder.name,
      holderLastName: invoices.student.holder.last_name
    }))
  );
};
