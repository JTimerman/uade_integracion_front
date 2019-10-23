import { SET_INVOICES } from "./actionTypes.json";
import { payInvoice as payInvoiceService } from "../../services/invoices";

export function setInvoices(invoices) {
  return { type: SET_INVOICES, invoices };
}

export const payInvoice = () => {
  return (dispatch, getState) => {
    const invoiceToPay = getState().invoiceToPay;

    return payInvoiceService(invoiceToPay.id, {}).catch(error => {
      Promise.reject(error);
    });
  };
};
