import React from "react";
import { AdminNavbar } from "../../../components/AdminNavbar/AdminNavbar";
import {
  Avatar,
  Badge,
  Button,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import "./Fac.scss";
import { AdminSidebar } from "../../../components/AdminSidebar/AdminSidebar";
import styled from "@emotion/styled";
export const AddFac = () => {
  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
  }));

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
            <div className="all-user-strip">Add Faculty</div>
            <div className="FacPaper">
              <Stack
                direction={{ xs: "column", md: "row" }}
                width="100%"
                justifyContent="space-between"
                alignItems="center"
              >
                <div className="left-side">
                  <Stack direction="column">
                    <span>Basic Info</span>
                    <div className="form">
                      {/* <label htmlFor="fname">First Name</label> */}
                      <TextField
                        id="outlined-basic"
                        label="First Name"
                        variant="outlined"
                        sx={{ marginTop: "2rem" }}
                      />
                      <TextField
                        id="outlined-basic"
                        label="Designation"
                        variant="outlined"
                        sx={{ marginTop: "2rem" }}
                      />
                      <div className="upload">
                        <Tooltip title="Upload Photo">
                          <a href="/">
                            <Badge
                              overlap="circular"
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "right",
                              }}
                              badgeContent={
                                <SmallAvatar
                                  alt="Remy Sharp"
                                  src="/images/admin/download.png"
                                  style={{ transform: "rotate(180deg)" }}
                                />
                              }
                            >
                              <Avatar
                                alt="Travis Howard"
                                src="/images/admin/Avatar.png"
                                sx={{ width: 100, height: 100 }}
                              />
                            </Badge>
                          </a>
                        </Tooltip>
                        <Button
                          variant="contained"
                          sx={{
                            background: "#E5E5E5",
                            color: "black",
                            margin: "2%",
                          }}
                        >
                          {" "}
                          Choose File{" "}
                        </Button>
                      </div>
                    </div>
                  </Stack>
                </div>
                <div className="right-side">
                  <Stack direction="column">
                    <div className="form">
                      {/* <label htmlFor="fname">First Name</label> */}
                      <TextField
                        id="outlined-basic"
                        label="Last Name"
                        variant="outlined"
                        sx={{ marginTop: "3.2rem" }}
                      />
                      <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        sx={{ marginTop: "2rem" }}
                      />
                      {/* <TextField
                        id="outlined-basic"
                        label="Designation"
                        variant="outlined"
                        sx={{ marginTop: "2rem" }}
                      /> */}
                      <div className="upload">
                        <Stack
                          direction={{ xs: "column", sm: "row" }}
                          spacing={1}
                          justifyContent="end"
                        >
                          <Button
                            variant="contained"
                            sx={{
                              background: "#025D97",
                            }}
                          >
                            Submit
                          </Button>
                          <Button
                            variant="contained"
                            sx={{
                              background: "#E5E5E5",
                              color: "black",
                            }}
                          >
                            Cancel
                          </Button>
                        </Stack>
                      </div>
                    </div>
                  </Stack>
                </div>
              </Stack>
            </div>
          </Stack>
        </div>
      </div>
    </div>
  );
};
