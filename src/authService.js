import { CURRENT_USER_KEY } from "./config";

const getCurrentUser = () =>
  JSON.parse(window.localStorage.getItem(CURRENT_USER_KEY));

const authService = { getCurrentUser };

export default authService;
