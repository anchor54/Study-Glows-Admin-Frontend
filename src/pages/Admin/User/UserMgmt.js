import React, { useEffect, useState } from "react";
import { AdminNavbar } from "../../../components/AdminNavbar/AdminNavbar";
import { UserTable } from "../../../components/AdminUser/UserTable"; 
import { UserGridView } from "../../../components/AdminUser/UserGridView"
import { Button, Stack } from "@mui/material";
import './User.scss'
import { AdminSidebar } from "../../../components/AdminSidebar/AdminSidebar";
export const UserMgmt = () => {
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
            {list ? (
            <Stack sx={{ width: '90%'}}>
                <div className="all-user-strip">
                    All Users
                </div>
                <div>
                    <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={1}
                    >
                        <Button onClick={()=> setList(true)}
                            variant="contained"
                            sx={{
                                background: "#025D97"
                            }}
                        >
                            List View
                        </Button>
                        <Button onClick={()=> setList(false)}
                        variant="contained"
                        sx={{
                            background: "#048CE2"
                        }}
                        >
                            Grid View
                        </Button>
                    </Stack>
                </div>
                <div className="userTable">
                    <UserTable />
                </div>
            </Stack>
            ):(<>
            <Stack sx={{ width: '90%'}}>
                <div className="all-user-strip">
                    All Users
                </div>
                <div>
                    <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={1}
                    >
                        <Button onClick={()=> setList(true)}
                            variant="contained"
                            sx={{
                                background: "#025D97"
                            }}
                        >
                            List View
                        </Button>
                        <Button onClick={()=> setList(false)}
                        variant="contained"
                        sx={{
                            background: "#048CE2"
                        }}
                        >
                            Grid View
                        </Button>
                    </Stack>
                </div>
                <div className="userGrid">
                    <UserGridView />
                </div>
            </Stack>
            </>)}
        </div>
      </div>
    </div>
  );
};
