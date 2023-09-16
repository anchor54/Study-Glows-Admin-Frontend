import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Requestcall from "../../Requestcall/Requestcall";

import { ProfileMenu } from "./ProfileMenu";

import "./DashboardLayout.scss";

export const DashboardLayout = () => {
  return (
    <>
      <div className="dashboardLayout">
        <ProfileMenu />
        <Outlet />
      </div>
      <Container style={{ marginTop: "5rem" }}>
        <Requestcall />
      </Container>
    </>
  );
};
