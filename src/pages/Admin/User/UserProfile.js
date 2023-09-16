import React from "react";
import { AdminNavbar } from "../../../components/AdminNavbar/AdminNavbar";
import {
  Avatar,
  Button,
  Stack,
  // TextField,
  // Checkbox,
  // FormControlLabel,
  Grid,
  Divider,
} from "@mui/material";
import { AdminSidebar } from "../../../components/AdminSidebar/AdminSidebar";
import { PostTable } from "../../../components/AdminUser/PostTable";

export const UserProfile = () => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

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
            <div className="all-user-strip">User Profile</div>
            <div className="UserPaper">
              <Grid
                container
                justifyContent="space-between"
                alignItems="space-between"
                sx={{ paddingTop: "2%", height: 'max-content' }}
              >
                <Grid item xs={12} md={4}>
                  <div className="left-side-profile" >
                    <Stack direction="column" sx={{ background: '#FFF', boxShadow: '4px 4px 20px 8px rgba(0, 0, 0, 0.08)', paddingTop: '5%', borderRadius: '5px'}} >
                      <Grid className="profile-card" container gap={3} justifyContent="center" >
                        <Grid item xs={12} justifyContent="center">
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <Avatar
                              src="/images/admin/Avatar.png"
                              sx={{ width: 150, height: 150 }}
                            />
                          </div>
                        </Grid>
                          <span>Kanishka Singh</span>
                        <Grid item xs={12}>
                          <Button variant="contained">Message</Button>
                        </Grid>
                        <Grid item xs={12}>
                          <Stack
                            direction="row"
                            justifyContent="space-between"
                            sx={{ paddingX: "2.5%" }}
                          >
                            <div className="course-date">Designation</div>
                            <div className="course-price">Educator</div>
                          </Stack>
                        <Divider sx={{ marginTop: "5%"}} />
                        </Grid>
                        <Grid item xs={12}>
                          <Stack
                            direction="row"
                            justifyContent="space-between"
                            sx={{ paddingX: "2.5%" }}
                          >
                            <div className="course-date">Department</div>
                            <div className="course-price">Courses</div>
                          </Stack>
                          <Divider sx={{ marginTop: "5%"}} />
                        </Grid>
                        <Grid item xs={12}>
                          <Stack
                            direction="row"
                            justifyContent="space-between"
                            sx={{ paddingX: "2.5%" }}
                          >
                            <div className="course-date">Tasks Done</div>
                            <div className="course-price">120</div>
                          </Stack>
                          <Divider sx={{ marginTop: "5%"}} />
                        </Grid>
                      </Grid>
                    </Stack>
                    <Stack direction="column" sx={{ background: '#FFF', boxShadow: '4px 4px 20px 8px rgba(0, 0, 0, 0.08)', marginTop: '5%', paddingTop: '5%', borderRadius: '5px'}}>
                      <Grid className="profile-card" container gap={3} sx={{textAlign: 'start'}}>
                        <Grid item xs={12} >
                          <Stack
                            direction="column"
                            justifyContent="space-around"
                            sx={{ paddingX: "2.5%" }}
                          >
                            <div className="course-date">Email</div>
                            <div className="course-price">kanishkasingh@gmail.com</div>
                          </Stack>
                          <Divider sx={{ marginTop: "5%"}} />
                        </Grid>
                        <Grid item xs={12}>
                          <Stack
                            direction="column"
                            justifyContent="space-between"
                            sx={{ paddingX: "2.5%" }}
                          >
                            <div className="course-date">Mobile</div>
                            <div className="course-price">+91 1234567890</div>
                          </Stack>
                          <Divider sx={{ marginTop: "5%"}} />
                        </Grid>
                        <Grid item xs={12}>
                          <Stack
                            direction="column"
                            justifyContent="space-between"
                            sx={{ paddingX: "2.5%" }}
                          >
                            <div className="course-date">Address</div>
                            <div className="course-price">7, Lok Kalyan Marg, formerly 7, Race Course Road,</div>
                          </Stack>
                        </Grid>
                        <Grid item xs={12}>
                          <Stack
                            direction="column"
                            justifyContent="space-between"
                            sx={{ paddingX: "2.5%" }}
                          >
                            <div className="course-date">Website</div>
                            <div className="course-price">www.kanishkasingh.com</div>
                          </Stack>
                          <Divider sx={{ marginTop: "5%"}} />
                        </Grid>
                      </Grid>
                    </Stack>
                  </div>
                </Grid>
                <Grid item xs={12} md={8}>
                  <div className="right-side-profile" style={{background: 'white'}}>
                    <PostTable />
                  </div>
                </Grid>
              </Grid>
            </div>
          </Stack>
        </div>
      </div>
    </div>
  );
};
