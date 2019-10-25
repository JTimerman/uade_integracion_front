import fetchAPI from "../api/fetchAPI";
import { BASE_URL, PAYMENTS } from "../constants/endpoints.json";

export const getPayments = () => {
  return fetchAPI(BASE_URL + PAYMENTS, "GET").then(payments =>
    payments.map(payment => ({
      ...payment,
      formatDate: payment.date.split("T")[0],
      amountPaid: payment.amount + " $AR",
      holderName: payment.invoice.student.holder.name,
      holderLastName: payment.invoice.student.holder.last_name
    }))
  );
};
