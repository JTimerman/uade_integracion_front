import { SET_INVOICES } from "./actionTypes.json";
import { payInvoice as payInvoiceService } from "../../services/invoices";
import { getInvoices as getInvoicesService } from "../../services/invoices";

export function setInvoices(invoices) {
  return { type: SET_INVOICES, invoices };
}

export const payInvoice = cardData => {
  return (dispatch, getState) => {
    const invoiceToPay = getState().invoiceToPay;
    const payload = {
      invoice_id: invoiceToPay.id,
      amount: invoiceToPay.amount,
      ...cardData
    };

    return payInvoiceService(payload).catch(error => Promise.reject(error));
  };
};

export function getInvoices() {
  return dispatch => {
    return getInvoicesService()
      .then(invoices => {
        dispatch(setInvoices(invoices));
      })
      .catch(() => Promise.reject(false));
  };
}
