import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import { PaymentMgmt } from "./Payment/PaymentMgmt";
import { UserMgmt } from "./User/UserMgmt";
import { CourseMgmt } from "./Course/CourseMgmt";
import { AddCourse } from "./Course/AddCourse";
import { ProductMgmt } from "./ProductMgmt";
import { TestMgmt } from "./Test/TestMgmt";
import { AddTest } from "./Test/AddTest";
import { StudentMgmt } from "./StudentMgmt";
import { FacMgmt } from "./Faculty/FacMgmt";
import { AddFac } from "./Faculty/AddFac";
import { EditFac } from "./Faculty/EditFac";
import { EditUser } from "./User/EditUser";
import { AddUser } from "./User/AddUser";
import { UserProfile } from "./User/UserProfile";
import { OrderDetails } from "./Payment/OrderDetails";
import { CalendarPage } from "./Calendar/CalendarPage";
import { Dashboard } from "./Dashboard";

import { AdminSidebar } from "../../components/AdminSidebar/AdminSidebar";
import { AdminNavbar } from "../../components/AdminNavbar/AdminNavbar";

function AdminLayout() {
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
        <Outlet/>
      </div>
    </div>
  );
}

export default AdminLayout