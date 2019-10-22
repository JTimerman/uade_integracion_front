import signInService from "../../services/signIn";
import { setPersonalData } from "./personalData";
import { setRoles } from "./roles";
import { generateAuthClient } from "../../api/fetchAPI";

export const CURRENT_USER_KEY = "currentUser";

export const authenticateUser = (username, password) => {
  return dispatch => {
    return signInService(username, password)
      .then(user => {
        window.localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
        generateAuthClient(user.token);
        const { roles, ...personalData } = user;
        dispatch(setPersonalData(personalData));
        dispatch(setRoles(roles));
        return user;
      })
      .catch(() => Promise.reject(false));
  };
};
