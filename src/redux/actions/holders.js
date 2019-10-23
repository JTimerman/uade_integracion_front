import {
  createHolder as createHolderService,
  getHolders as getHoldersService,
  getHolderInvoces
} from "../../services/holders";

import { SET_HOLDERS } from "./actionTypes.json";
import { setInvoices } from "./invoices";
import { toast } from "react-toastify";

function setHolders(holders) {
  return { type: SET_HOLDERS, holders };
}

export const getHolders = () => {
  return dispatch => {
    return getHoldersService()
      .then(holders => {
        dispatch(setHolders(holders));
      })
      .catch(() => Promise.reject(false));
  };
};

export const createHolder = holder => {
  return () => {
    return createHolderService(holder).catch(error => {
      Promise.reject(error);
      toast.error("An error has ocurred while creating a holder!");
    });
  };
};

export const getInvoices = () => {
  return (dispatch, getState) => {
    return getHolderInvoces(getState().personalData.id)
      .then(invoices => {
        dispatch(setInvoices(invoices));
      })
      .catch(() => Promise.reject(false));
  };
};
