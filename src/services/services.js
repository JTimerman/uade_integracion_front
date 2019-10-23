import fetchAPI from "../api/fetchAPI";
import { BASE_URL, SERVICES } from "../constants/endpoints.json";

const get = () => fetchAPI(BASE_URL + SERVICES, "GET");
const getByStudentId = studentId =>
  fetchAPI(`${BASE_URL}/students/${studentId}/services`, "GET");

const ServicesService = { get, getByStudentId };

export default ServicesService;
