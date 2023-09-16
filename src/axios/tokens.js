import jwt_decode from "jwt-decode";
import dayjs from "dayjs";

export const getAuthTokens = () => {
  return localStorage.getItem("userToken") ? JSON.parse(localStorage.getItem("userToken")) : null;
};

export const getLocalAccessToken = () => {
  let authTokens = getAuthTokens();
  return authTokens ? authTokens?.access : null;
};

export const getLocalRefreshToken = () => {
  let authTokens = getAuthTokens();
  return authTokens ? authTokens?.refresh : null;
};

export const removeAuthTokens = () => {
  localStorage.removeItem("userToken");
};

export const setAuthTokens = (accessToken = null, refreshToken = null) => {
  let authTokens = getAuthTokens();
  let updateStatus = false;
  /** if authtokens is null set new accesstoken & refresh token */
  if (authTokens == null && accessToken != null && refreshToken != null) {
    localStorage.setItem(
      "userToken",
      JSON.stringify({
        access: accessToken,
        refresh: refreshToken,
      })
    );
    return true;
  }
  /** if accessToken is updated */
  if (accessToken != null) {
    authTokens.access = accessToken;
    updateStatus = true;
  }
  /** if refresh token is updated */
  if (refreshToken != null) {
    authTokens.refresh = refreshToken;
    updateStatus = true;
  }
  /** if update status is true */
  if (updateStatus) {
    localStorage.setItem("userToken", JSON.stringify(authTokens));
    return true;
  }
  /** return false otherwise */
  return false;
};

export const isTokenExpired = () => {
  let authToken = getAuthTokens();
  const decoded_token = authToken?.access ? jwt_decode(authToken?.access) : null;
  const isExpired = decoded_token ? dayjs.unix(decoded_token.exp).diff(dayjs()) < 1 : null;
  return isExpired == null ? true : isExpired;
};
