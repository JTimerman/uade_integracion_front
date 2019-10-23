import get from "lodash/get";

export const getInvoices = store => get(store, "invoices");
