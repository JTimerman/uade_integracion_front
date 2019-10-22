import signInService from "../../services/signIn";
import { setPersonalData } from "./personalData";
import { setRole } from "./role";
import { generateAuthClient } from "../../api/fetchAPI";

export const CURRENT_USER_KEY = "currentUser";

export const authenticateUser = (username, password) => {
  return dispatch => {
    return signInService(username, password)
      .then(user => {
        user.role = "EMPLOYEE";
        window.localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
        generateAuthClient(user.token);
        const { role, ...personalData } = user;
        dispatch(setPersonalData(personalData));
        dispatch(setRole(role));
        return user;
      })
      .catch(() => Promise.reject(false));
  };
};
