import get from "lodash/get";

export const getUserName = store => get(store, "personalData.name");
export const getUserLastname = store => get(store, "personalData.lastname");
