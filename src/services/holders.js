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

export const getHolderInvoices = id => {
  return fetchAPI(BASE_URL + HOLDERS + `/${id}/invoices`, "GET").then(
    invoices =>
      invoices.map(invoice => ({
        ...invoice,
        name: invoice.student.name,
        lastname: invoice.student.last_name,
        amount: invoice.total,
        date: `${invoice.year}-${invoice.month}`,
        id: `${invoice.id}`
      }))
  );
};

export const getHolderPayments = id => {
  return fetchAPI(BASE_URL + HOLDERS + `/${id}/payments`, "GET").then(
    payments =>
      payments.map(payment => ({
        ...payment,
        amount: payment.amount,
        date: payment.date,
        paymentMethod: payment.payment_method
      }))
  );
};
