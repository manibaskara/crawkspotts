import axios from "axios";
import { CountryDataList } from "../types";

const BASE_API_URL = "https://api.sampleapis.com/";

/* Create axios instance */
const api = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

const getCountries = () => {
  return api.get<CountryDataList>("countries/countries");
};

export default {
  api,
  getCountries,
};
