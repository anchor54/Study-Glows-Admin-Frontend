import React from "react";
import { AdminNavbar } from "../../components/AdminNavbar/AdminNavbar";
import { Stack } from "@mui/material";
import "./User.scss";
import { AdminSidebar } from "../../components/AdminSidebar/AdminSidebar";
import { StudentTable } from "../../components/AdminStudent/StudentTable";
export const StudentMgmt = () => {
  return (
    <div
      style={{
        display: "flex",
        margin: 0,
        padding: 0,
        background: "#F1F2F5",
        fontFamily: "Lato",
      }}
    >
      <AdminSidebar />
      <div className="main-dash">
        <AdminNavbar />
        <div className="main-user-dash">
          <Stack sx={{ width: "90%" }}>
            <div className="all-user-strip">All Students</div>
            <div className="userTable">
              <StudentTable />
            </div>
          </Stack>
        </div>
      </div>
    </div>
  );
};
