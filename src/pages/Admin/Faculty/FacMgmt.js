import React from "react";
import { AdminNavbar } from "../../../components/AdminNavbar/AdminNavbar";
import { FacTable } from "../../../components/AdminFaculty/FacTable"; 
import { Button, Stack } from "@mui/material";
import { AdminSidebar } from "../../../components/AdminSidebar/AdminSidebar";
import { useNavigate } from "react-router-dom";
export const FacMgmt = () => {

  const navigate = useNavigate();

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
                    All Faculty
                </div>
                <div>
                    <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={1}
                    >
                        <Button onClick={() => navigate('/admin/faculty/addfaculty')}
                            variant="contained"
                            sx={{
                                background: "#025D97"
                            }}
                        >
                            Add Faculty
                        </Button>
                    </Stack>
                </div>
                <div className="userTable">
                    <FacTable />
                </div>
            </Stack>
        </div>
      </div>
    </div>
  );
};
