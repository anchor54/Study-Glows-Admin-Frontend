import React, { useState } from "react";
import { AdminNavbar } from "../../../components/AdminNavbar/AdminNavbar";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Input,
  Stack,
} from "@mui/material";
import { AdminSidebar } from "../../../components/AdminSidebar/AdminSidebar";
// import './Product.scss';
import { TestTable } from "../../../components/AdminTest/TestTable";
import publicAxios from "../../../axios/publicAxios";
export const TestMgmt = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState();
  // const [testSeries, setTestSeries] = useState();

  const handleCreateTest = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    // setTestSeries(event.tagrget.value)
  }
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
            <div className="all-user-strip">All Test Series</div>
            <div>
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
                  onClick={handleCreateTest}
                >
                  Create a Test
                </Button>
              </Stack>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Create Test Series</DialogTitle>
                <DialogContent>
                  <Input
                    type="text"
                    onChange={(event) => {
                      setTitle(event.target.value);
                    }}
                    value={title}
                    fullWidth
                    placeholder="Enter Name of the Test Series"
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleSubmit} variant="contained">
                    Submit
                  </Button>
                  <Button onClick={handleClose} variant="contained">
                    Cancel
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
            <div className="userGrid">
              <TestTable name={title} toggle={true} />
            </div>
          </Stack>
        </div>
      </div>
    </div>
  );
};
