import fetchAPI from "../api/fetchAPI";
import { BASE_URL, SIGN_IN } from "../constants/endpoints.json";

export default (username, password) => {
  const body = { username, password };

  return fetchAPI(BASE_URL + SIGN_IN, "POST", body).then(response => {
    if (response.status === 401) {
      return Promise.reject();
    } else {
      const user = {
        name: "Nombre",
        rolId: "ADMIN",
        rolDescription: "description"
      };

      window.localStorage.setItem("currentUser", JSON.stringify(user));
      return response.json();
    }
  });
};
