import React from "react";
import { AdminNavbar } from "../../../components/AdminNavbar/AdminNavbar";
import {
  Avatar,
  Badge,
  Button,
  InputAdornment,
  InputLabel,
  Select,
  Stack,
  TextField,
  Tooltip,
  MenuItem,
  FormControl,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { AdminSidebar } from "../../../components/AdminSidebar/AdminSidebar";
import styled from "@emotion/styled";

export const AddUser = () => {

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const [dept, setDept] = React.useState("");

  const handleChange = (event) => {
    setDept(event.target.value);
  };

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
            <div className="all-user-strip">Add User</div>
            <div className="FacPaper">
              <Stack
                direction={{ xs: "column", md: "row" }}
                width="100%"
                justifyContent="space-between"
                alignItems="center"
                sx={{ paddingTop: "2%" }}
              >
                <div className="left-side">
                  <Stack direction="column">
                    <span style={{ textAlign: "start", paddingLeft: '1%' }}>
                      <strong>Basic Info</strong>
                    </span>
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
                        label="Email Here"
                        variant="outlined"
                        sx={{ marginTop: "2rem" }}
                      />
                      <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        sx={{ marginTop: "2rem" }}
                      />
                      <TextField
                        label="Phone Number"
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: "25ch", marginTop: "2rem" }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              +91
                            </InputAdornment>
                          ),
                        }}
                      />
                      <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-helper-label">
                          Department
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          value={dept}
                          label="Department"
                          onChange={handleChange}
                        >
                          <MenuItem value="dept1">Department 1</MenuItem>
                          <MenuItem value="dept2">Department 2</MenuItem>
                          <MenuItem value="dept3">Department 3</MenuItem>
                        </Select>
                      </FormControl>
                      {/* <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={dept}
                        label="Department"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select> */}
                      <TextField
                        id="outlined-basic"
                        label="Designation"
                        variant="outlined"
                        sx={{ marginTop: "2rem" }}
                      />
                      <div className="upload">
                        <Tooltip title="Edit Photo">
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
                        sx={{ marginTop: "3.3rem" }}
                      />
                      <TextField
                        id="outlined-basic"
                        label="Joining Date"
                        variant="outlined"
                        defaultValue={date}
                        InputProps={{
                            readOnly: true,
                          }}
                        sx={{ marginTop: "2rem" }}
                      />
                      <TextField
                        id="outlined-password-input"
                        label="Confirm Password"
                        type="password"
                        autoComplete="current-password"
                        sx={{ marginTop: "2rem" }}
                      />
                        <FormControlLabel control={<Checkbox defaultChecked disabled />} label="Reset password on first login" />
                      <TextField
                        id="outlined-multiline-static"
                        label="Address"
                        multiline
                        rows={4}
                        sx={{ marginTop: "2rem" }}
                      />
                      {/* <TextField
                        id="outlined-basic"
                        label="Date of Birth"
                        variant="outlined"
                        sx={{ marginTop: "2.6rem" }}
                      /> */}
                      <TextField
                        id="outlined-basic"
                        label="Additional Details, if any"
                        variant="outlined"
                        sx={{ marginTop: "3.5rem" }}
                      />
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
