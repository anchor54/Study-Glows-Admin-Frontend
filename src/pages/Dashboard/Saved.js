import SavedReading from "../../components/Dashboard/Saved/SavedReading";
// import SavedCourse from "../../components/Dashboard/Saved/SavedCourse";
import DashboardVacancies from "../../components/Dashboard/Saved/DashboardVacancies";

import "./Dashboard.scss";

export const Saved = () => {
  return (
    <div className="dashboardWrapper">
      <div className="dashboardMainContent">
        <SavedReading />
        {/* <SavedCourse /> */}
      </div>
      <div className="dashboardSideBar">
        <DashboardVacancies />
      </div>
    </div>
  );
};
