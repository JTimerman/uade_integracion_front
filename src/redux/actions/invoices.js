import { SET_INVOICES } from "./actionTypes.json";

export function setInvoices(invoices) {
  return { type: SET_INVOICES, invoices };
}
