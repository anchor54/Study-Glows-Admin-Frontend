import axios from "axios";

import publicAxios from "./publicAxios";
import {
  getLocalAccessToken,
  getLocalRefreshToken,
  setAuthTokens,
  removeAuthTokens,
} from "./tokens";

const baseURL = process.env.REACT_APP_BACKEND_URL;

const privateAxios = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: `Bearer ${getLocalAccessToken()}`,
  },
});

privateAxios.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    if (err.response && getLocalRefreshToken()) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          const rs = await refreshToken();
          const { access } = rs.data;
          setAuthTokens(access);
          err.response.config.headers["Authorization"] = `Bearer ${access}`;
          return privateAxios(originalConfig);
        } catch (_error) {
          if (_error.response && _error.response.data) {
            removeAuthTokens();
            window.location.reload();
            return Promise.reject(_error.response.data);
          }
          return Promise.reject(_error);
        }
      }
    }
    return Promise.reject(err);
  }
);

const refreshToken = () => {
  return publicAxios.post("/account/login/refresh", {
    refresh: getLocalRefreshToken(),
  });
};

export default privateAxios;
