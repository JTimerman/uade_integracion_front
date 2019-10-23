import fetchAPI from "../api/fetchAPI";
import { BASE_URL, SERVICES } from "../constants/endpoints.json";

const get = () =>
  fetchAPI(BASE_URL + SERVICES, "GET").then(services => {
    return services.filter(
      service => service.id !== 10001 && service.id !== 10002
    );
  });
const getByStudentId = studentId =>
  fetchAPI(`${BASE_URL}/students/${studentId}/services`, "GET").then(
    services => {
      return services.filter(
        service => service.id !== 10001 && service.id !== 10002
      );
    }
  );

const ServicesService = { get, getByStudentId };

export default ServicesService;
