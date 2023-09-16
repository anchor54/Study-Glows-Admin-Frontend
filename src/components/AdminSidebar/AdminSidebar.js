import React, { useState } from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
// import  styles from './AdminNavbar.module.css';
import { Link } from "react-router-dom";

export const AdminSidebar = () => {
  const [toggled, setToggled] = useState(false);
  const [broken, setBroken] = useState(
    window.matchMedia("(max-width: 800px)").matches
  );
  return (
    <Sidebar
      toggled={toggled}
      customBreakPoint="800px"
      onBreakPoint={setBroken}
      width="200px"
      backgroundColor="#0373BA"
      style={{ height: "100vh" }}
    >
      <Menu>
        <MenuItem style={{ background: "#FCB03E", textAlign: "center" }}>
          <img src="/images/sidebar-logo.png" alt="" />
        </MenuItem>
        <MenuItem
          style={{
            background: "#C42730",
            color: "white",
            margin: "5%",
            fontFamily: "Lato",
            fontWeight: "bold",
          }}
        >
          Live Class
        </MenuItem>
        <MenuItem
          style={{
            background: "#FCB03E",
            color: "white",
            margin: "5%",
            fontFamily: "Lato",
            fontWeight: "bold",
          }}
        >
          Announcement
        </MenuItem>
      </Menu>
      <div style={{ color: "white", padding: "5%", fontFamily: "Lato" }}>
        MAIN MENU
      </div>
      <Menu
        style={{
          color: "white",
          fontFamily: "Lato",
          fontWeight: "bold",
          fontSize: "12px",
        }}
      >
        <Link
          to="/admin/product"
          style={{ color: "white", textDecoration: "none" }}
        >
          <MenuItem icon={<img src="/images/admin/icon.svg" alt="Admin" />}>
            All Products
          </MenuItem>
        </Link>
        <Link
          to="/admin/product"
          style={{ color: "white", textDecoration: "none" }}
        >
          <MenuItem icon={<img src="/images/admin/icon.svg" alt="Admin" />}>
            Posts
          </MenuItem>
        </Link>
        <SubMenu icon={<img src="/images/admin/icon.svg" alt="Admin" />} label="Course Management">
          <Link
            to="/admin/course"
            style={{ color: "black", textDecoration: "none" }}
          >
            <MenuItem>
              All Courses
            </MenuItem>
          </Link>
          <Link
            to="/admin/course/addCourse"
            style={{ color: "black", textDecoration: "none" }}
          >
            <MenuItem >
              Add Course
            </MenuItem>
          </Link>
        </SubMenu>
        <Link
          to="/admin/user"
          style={{ color: "white", textDecoration: "none" }}
        >
          <MenuItem icon={<img src="/images/admin/icon.svg" alt="Admin" />}>
            User Management
          </MenuItem>
        </Link>
        <Link
          to="/admin/test"
          style={{ color: "white", textDecoration: "none" }}
        >
          <MenuItem icon={<img src="/images/admin/icon.svg" alt="Admin" />}>
            Test Series Management
          </MenuItem>
        </Link>
        <Link
          to="/admin/payment"
          style={{ color: "white", textDecoration: "none" }}
        >
          <MenuItem icon={<img src="/images/admin/icon.svg" alt="Admin" />}>
            Payment Management
          </MenuItem>
        </Link>
        <Link
          to="/admin/student"
          style={{ color: "white", textDecoration: "none" }}
        >
          <MenuItem icon={<img src="/images/admin/icon.svg" alt="Admin" />}>
            Student Management
          </MenuItem>
        </Link>
        <Link
          to="/admin/faculty"
          style={{ color: "white", textDecoration: "none" }}
        >
          <MenuItem icon={<img src="/images/admin/icon.svg" alt="Admin" />}>
            Faculty Management
          </MenuItem>
        </Link>
        <Link
          to="/admin/calendar"
          style={{ color: "white", textDecoration: "none" }}
        >
          <MenuItem icon={<img src="/images/admin/icon.svg" alt="Admin" />}>
            Calendar
          </MenuItem>
        </Link>
      </Menu>
    </Sidebar>
  );
};
