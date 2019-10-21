import get from "lodash/get";

export const getUserName = store => get(store, "personalData.name");
export const getUserSurname = store => get(store, "personalData.surname");
