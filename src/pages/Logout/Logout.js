import { useEffect } from "react";
import { removeAuthTokens } from "../../axios/tokens";

export const Logout = () => {
  useEffect(() => {
    removeAuthTokens();
    window.location.href = "/";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return;
};
