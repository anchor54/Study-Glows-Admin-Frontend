import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { Navigate, useLocation, Outlet } from "react-router-dom";

import { loginPopupAtom } from "../../state/atoms/loginPopupAtom";

export const ProtectedRoute = ({ auth, redirectPath = "/" }) => {
  const location = useLocation();
  const [, setLoginPopup] = useRecoilState(loginPopupAtom);

  useEffect(() => {
    if (!auth) {
      setLoginPopup(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  return !auth ? <Navigate to={redirectPath} replace state={{ from: location }} /> : <Outlet />;
};
