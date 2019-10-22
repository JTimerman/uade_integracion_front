import signInService from "../../services/signIn";
import { setPersonalData } from "./personalData";
import { setRoles } from "./roles";
import { generateAuthClient } from "../../api/fetchAPI";

export const CURRENT_USER_KEY = "currentUser";

export const authenticateUser = (username, password) => {
  return dispatch => {
    return signInService(username, password)
      .then(response => {
        window.localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(response));
        const { user, token } = response;
        const roles = response.roles.map(role =>
          role.split("_")[0].toUpperCase()
        );
        const personalData = {
          ...user[response.roles[0]],
          lastname: user[response.roles[0]].last_name,
          last_name: undefined
        };

        console.log("personalData: ", personalData);

        generateAuthClient(token);
        dispatch(setPersonalData(personalData));
        dispatch(setRoles(roles));

        return Promise.resolve();
      })
      .catch(() => Promise.reject(false));
  };
};
