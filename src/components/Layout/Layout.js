import { Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Footer from "./Footer";
import Header from "./Header";
import Toast from "../Tools/Toast";
import { useRecoilState, useRecoilValue } from "recoil";
import { toastAtom } from "../../state/atoms/toastAtom";
import { LoginModal } from "../Login/LoginModal";
import { loginPopupAtom } from "../../state/atoms/loginPopupAtom";
import "./Layout.scss";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0474ba",
    },
    secondary: {
      main: "#C4262F",
    },
    tertiary: {
      main: "#156C3C",
      contrastText: "#fff",
    },
    warning: {
      main: "#FCAF3D",
    },
  },
});

export const Layout = () => {
  const mainNavbar = [
    // {
    //   redirect_to: "/courses/academic",
    //   name: "Course",
    // },
    {
      redirect_to: "test_series",
      name: "Test Series",
    },
    {
      redirect_to: "/reading/current_affairs",
      name: "Current Affairs",
    },
    {
      redirect_to: "/reading/editorials",
      name: "Editorials",
    },
    {
      redirect_to: "/reading/vacancies",
      name: "Vacancies",
    },
  ];
  const [showToast, setShowToast] = useRecoilState(toastAtom);
  const loginPopup = useRecoilValue(loginPopupAtom);

  return (
    <ThemeProvider theme={theme}>
      <div className="Layout">
        <Header mainNavbar={mainNavbar} />
        <div className="mainContent">
          <Outlet />
        </div>
        <Footer />
        <Toast showToast={showToast} setShowToast={setShowToast} />
        <LoginModal open={loginPopup} />
      </div>
    </ThemeProvider>
  );
};
