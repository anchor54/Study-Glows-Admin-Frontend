import React from "react";
import { AdminNavbar } from "../../../components/AdminNavbar/AdminNavbar";
import "./Payment.scss";
import { Stack } from "@mui/material";
import { Table } from "../../../components/AdminPayment/Table";
import { AdminSidebar } from "../../../components/AdminSidebar/AdminSidebar";
export const PaymentMgmt = () => {
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
            <div className="all-user-strip">All Orders</div>
            <div className="userTable">
              <Table />
            </div>
          </Stack>
        </div>
      </div>
    </div>
  );
};
