import { SET_INVOICE_TO_PAY } from "./actionTypes.json";
import { getInvoiceById } from "../selectors/invoices";

export function setInvoiceToPay(invoice) {
  return { type: SET_INVOICE_TO_PAY, invoice };
}

export const setInvoiceToPayById = id => {
  return (dispatch, getState) => {
    const invoiceToPay = getInvoiceById(getState(), id);

    dispatch(setInvoiceToPay(invoiceToPay));
  };
};
