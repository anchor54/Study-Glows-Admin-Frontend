import React, { useState } from "react";
import { AdminNavbar } from "../../../components/AdminNavbar/AdminNavbar";
import { CourseGridView } from "../../../components/AdminCourse/CourseGridView"
import { Button, Checkbox, Stack } from "@mui/material";
import './Course.scss'
import { AdminSidebar } from "../../../components/AdminSidebar/AdminSidebar";
export const CourseMgmt = () => {

  const [list, setList] = useState(true);
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
            <Stack sx={{ width: '90%'}}>
                <div className="all-user-strip">
                    Bundle Courses
                </div>
                <div>
                    <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={1}
                    justifyContent="space-between"
                    >
                        <Stack direction="row">
                            <div className="legends"><Checkbox />Non-Academic Courses</div>
                            <div className="legends"><Checkbox />Academic Courses</div>
                            <div className="legends"><Checkbox />Bundled Courses</div>
                        </Stack>
                        <Button onClick={()=> setList(true)}
                            variant="contained"
                            sx={{
                                background: "#025D97"
                            }}
                        >
                            Make Bundle
                        </Button>
                    </Stack>
                </div>
                <div className="userGrid">
                    <CourseGridView />
                </div>
            </Stack>
        </div>
      </div>
    </div>
  );
};
