import {
  createHolder as createHolderService,
  getHolders as getHoldersService,
  getHolderPayments as getHolderPaymentsService,
  getHolderInvoices,
  updateHolder as updateHolderService,
  deleteHolder as deleteHolderService
} from "../../services/holders";

import { SET_HOLDERS } from "./actionTypes.json";
import { setPayments } from "./payments";
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
    return getHolderInvoices(getState().personalData.id)
      .then(invoices => {
        dispatch(setInvoices(invoices));
      })
      .catch(() => Promise.reject(false));
  };
};

export const updateHolder = (id, newHolder) => {
  return () => {
    return updateHolderService(id, newHolder).catch(error => {
      Promise.reject(error);
    });
  };
};

export const deleteHolder = id => {
  return () => {
    return deleteHolderService(id).catch(error => {
      Promise.reject(error);
    });
  };
};

export const getHolderPayments = () => {
  return (dispatch, getState) => {
    return getHolderPaymentsService(getState().personalData.id)
      .then(payments => {
        dispatch(setPayments(payments));
      })
      .catch(() => Promise.reject(false));
  };
};
