import React from "react";

import DashboardCurrentAffair from "../../components/Dashboard/MyLibrary/DashboardCurrentAffair";
import DashboardEditorials from "../../components/Dashboard/MyLibrary/DashboardEditorials";
import DashboardVacancies from "../../components/Dashboard/Saved/DashboardVacancies";

import "./Dashboard.scss";

export const MyLibrary = () => {
  return (
    <div className="dashboardWrapper">
      <div className="dashboardMainContent">
        <DashboardCurrentAffair />
        <DashboardEditorials />
      </div>
      <div className="dashboardSideBar">
        <DashboardVacancies />
      </div>
    </div>
  );
};
