import axios from "axios";

import { CONSTANTS, CookieUtil } from "../utils";

export const axiosApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

axiosApi.interceptors.request.use((config) => {
  if (config.headers) {
    const token: string = CookieUtil.getCookie(CONSTANTS.TOKEN_KEY);
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
  }
  return config;
});

axiosApi.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (!error.response) {
      return Promise.reject(error);
    }

    if (error.response.status === 401) {
      const token: string = CookieUtil.getCookie(CONSTANTS.REFRESH_TOKEN_KEY);
      if (!token) {
        window.location.reload();
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);
