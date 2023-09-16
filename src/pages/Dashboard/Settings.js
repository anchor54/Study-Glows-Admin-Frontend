import MySubscription from "../../components/Dashboard/Settings/MySubscription";
import NotificationSetting from "../../components/Dashboard/Settings/NotificationSetting";

import "./Dashboard.scss";

export const Settings = () => {
  return (
    <div className="dashboardWrapper">
      <div className="dashboardMainContent">
        <MySubscription />
      </div>
      <div className="dashboardSideBar">
        <NotificationSetting />
      </div>
    </div>
  );
};
