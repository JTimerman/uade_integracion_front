import get from "lodash/get";

export const getHolders = store => get(store, "holders");
