import fetchAPI from "../api/fetchAPI";
import { BASE_URL, SIGN_IN } from "../constants/endpoints.json";

export default (username, password) => {
  const body = { username, password };

  return fetchAPI(BASE_URL + SIGN_IN, "POST", body);
};
