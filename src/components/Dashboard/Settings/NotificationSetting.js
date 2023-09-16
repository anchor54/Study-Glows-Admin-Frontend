import React from "react";
import { Switch } from "@mui/material";

import Divider from "../../Tools/Divider";

import "./Settings.scss";

const NotificationSetting = () => {
  const notificationSetting = [
    {
      id: 1,
      type: "Email",
    },
    {
      id: 2,
      type: "Push",
    },
    {
      id: 3,
      type: "Update Center",
    },
    {
      id: 4,
      type: "SMS",
    },
  ];

  return (
    <div className="notification">
      <h1>Manage Notification</h1>
      <Divider customStyle={{ backgroundColor: "#1A7FBE"}} />
      {notificationSetting.map((item) => (
        <div className="item" key={`notification-setting-${item.id}`}>
          <div>{item.type}</div>
          <div>
            <Switch />
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationSetting;
