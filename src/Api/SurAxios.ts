/**
 * @author Muhammad Omran
 * @date 18-03-2022
 * @description implement axios instance with the needed interceptors
 */

import axios from "axios";
import { LOCAL_STORAGE_KEYS } from "../Constants/LocalStorageKeys";
import { API_CONSTANTS } from "./ApiConstants";
// import Toast from "react-toastify";

export const SurAxios = axios.create({
  baseURL: API_CONSTANTS.baseUrl,
});

function getAuthToken() {
  return localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
}

SurAxios.interceptors.request.use(
  (config) => {
    const accessToken = getAuthToken();

    if (accessToken) {
      config.headers!["Authorization"] = `Bearer ${accessToken}`;
    }
    config.headers!["Content-Type"] = "application/json";
    config.headers!["Accept"] = "application/json";

    return config;
  },
  (error) => Promise.reject(error)
);

SurAxios.interceptors.response.use(
  async (config) => {
    return config;
  },
  (error) => {
    if (error.response) {
      let message = "";
      const errMsg =
        "We noticed the problem and will fix it as soon as possible.";
      console.log(
        "[surreal-api] server just throw an error, ",
        error.response.data
      );
      switch (error.response.status) {
        case 400:
          message = error.response.data.error_des;
          break;
        case 403:
          message = error.response.data.error_des;
          break;
        case 500:
          message = error.response.data.error_des ?? errMsg;
          break;
        default:
          message = error.response.data.error_des;
      }

      // toast.error(message);
    }
    return Promise.reject(error);
  }
);
