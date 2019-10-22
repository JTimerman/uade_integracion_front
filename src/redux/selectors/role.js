import get from "lodash/get";

export const getUserRole = store => get(store, "role");
