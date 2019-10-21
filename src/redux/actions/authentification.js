import signInService from "../../services/signIn";
import { setPersonalData } from "./personalData";
import { setRole } from "./role";

export const authenticateUser = (username, password) => {
  return dispatch => {
    return signInService(username, password)
      .then(user => {
        const personalData = {
          name: user.name,
          surname: user.surname
        };

        dispatch(setPersonalData(personalData));
        dispatch(setRole(user.role));
      })
      .catch(() => Promise.reject(false));
  };
};
