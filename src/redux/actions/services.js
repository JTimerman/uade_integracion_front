import { SET_SERVICES } from "./actionTypes.json";
import ServicesService from "../../services/services";

function setServices(services) {
  return { type: SET_SERVICES, services };
}

export const getServices = () => {
  return dispatch => {
    return ServicesService.get()
      .then(services => {
        dispatch(setServices(services));
      })
      .catch(() => Promise.reject(false));
  };
};
