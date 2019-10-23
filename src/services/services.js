import fetchAPI from "../api/fetchAPI";
import { BASE_URL, SERVICES } from "../constants/endpoints.json";

const get = () => fetchAPI(BASE_URL + SERVICES, "GET");

const ServicesService = { get };

export default ServicesService;
