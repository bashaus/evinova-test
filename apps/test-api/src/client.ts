import axios from "axios";

import config from "./config";

const { REQRES_IN_API_BASE_URL, REQRES_IN_API_KEY } = config;

export const apiClient = axios.create({
  baseURL: REQRES_IN_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": REQRES_IN_API_KEY,
  },
  timeout: 5000,

  validateStatus: () => true,
});
