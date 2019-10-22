import { getHolders as getHoldersService } from "../../services/holders";

import { SET_HOLDERS } from "./actionTypes.json";

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
