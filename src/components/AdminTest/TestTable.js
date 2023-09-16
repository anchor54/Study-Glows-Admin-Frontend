import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Button, Dialog, IconButton, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import publicAxios from "../../axios/publicAxios";
import { useState } from "react";
import { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Tests } from "./Tests";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const TestTable = (props) => {

  console.log("TEST SERIES NAME: ",props.name);
  const [open, setOpen] = React.useState(false);
  const [selectedRow, setRow] = useState();

  const handleClickOpen = (params) => {
    setOpen(true);
    setRow(params.row);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const getInfo = async () => {
    await publicAxios
      // .get("http://65.0.164.61/testseries")
      .get("http://65.0.164.61/alltest")
      .then((res) => {
        console.log("DATA: ", res.data);
        if (res.status === 200) {
          setData(res.data);
          setLoading(false);
        }
      })
      .catch((e) => {
        if (e.response && e.response.status === 404) {
          setData(true);
          setLoading(false);
        }
        console.info("error", e);
      });
  };
  useEffect(() => {
    setLoading(true);
    getInfo();
    setOpen(false);
    setLoading(false);
  }, []);

  // publicAxios.post(url, body).then((response) => {
  //   console.log("API WORKED?: ", response)
  // }).catch((e) => console.log(e);)
  const columns = [
    {
      field: "No",
      width: 10,
      headerName: "",
    },
    {
      field: "title",
      headerName: "",
      width: 300,
      renderCell: (params) => {
        const currentRow = params.row;
        // console.log("CURRENT ROW: ", currentRow);
        return (
          <Button
            onClick={() => handleClickOpen(params)}
            style={{ textDecoration: "none" }}
          >
            <Stack sx={{ textAlign: "start" }}>
              <span style={{ fontWeight: "bold" }}>{currentRow?.title}</span>
              <span style={{ color: "#666", fontSize: "0.6rem" }}>
                UPSC FULL TEST PAPER, UPSC PRELIMS, UPSC 2022
              </span>
            </Stack>
          </Button>
        );
      },
    },
    {
      field: "language",
      headerName: "",
      width: 150,
    },
    {
      field: "draft",
      headerName: "",
      width: 100,

      renderCell: () => {
        return (
          <Button
            variant="contained"
            sx={{ background: "#DDD", color: "#666" }}
            disabled
          >
            Draft
          </Button>
        );
      },
    },
    {
      field: "validity",
      headerName: "",
      width: 200,
    },
    {
      field: "price",
      headerName: "",
      width: 100,
    },
  ];

  const rows = [
    {
      id: 1,
      No: "#1",
      //   Name: "UPSC CSE PRELIMS FULL TEST PAPER 4",
      participants: "256 participants",
      Duration: "12 Months",
      Price: "₹ 250",
    },
    {
      id: 2,
      No: "#2",
      //   Name: "Kanishka Singh",
      participants: "256 participants",
      Duration: "12 Months",
      Price: "₹ 250",
    },
    {
      id: 3,
      No: "#3",
      //   Name: "Srishti Mishra",
      participants: "256 participants",
      Duration: "12 Months",
      Price: "₹ 250",
    },
    {
      id: 4,
      No: "#4",
      //   Name: "Srishti Mishra",
      participants: "256 participants",
      Duration: "12 Months",
      Price: "₹ 250",
    },
    {
      id: 5,
      No: "#5",
      //   Name: "Srishti Mishra",
      participants: "256 participants",
      Duration: "12 Months",
      Price: "₹ 250",
    },
    {
      id: 6,
      No: "#6",
      //   Name: "Srishti Mishra",
      participants: "256 participants",
      Duration: "12 Months",
      Price: "₹ 250",
    },
    {
      id: 7,
      No: "#7",
      //   Name: "Srishti Mishra",
      participants: "256 participants",
      Duration: "12 Months",
      Price: "₹ 250",
    },
    {
      id: 8,
      No: "#8",
      //   Name: "Srishti Mishra",
      participants: "256 participants",
      Duration: "12 Months",
      Price: "₹ 250",
    },
    {
      id: 9,
      No: "#9",
      //   Name: "Kanishka Singh",
      participants: "256 participants",
      Duration: "12 Months",
      Price: "₹ 250",
    },
  ];

  // Otherwise filter will be applied on fields such as the hidden column id

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      {data ? (
        <>
          {/* {data.map((test)=> {
          return (<>
          {test.title} <br />
          </>)})} */}
          <DataGrid
            rows={data}
            columns={columns}
            disableColumnFilter
            disableColumnSelector
            checkboxSelection
            disableDensitySelector
            slots={{ toolbar: GridToolbar }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
                quickFilterProps: { debounceMs: 500 },
              },
            }}
          />

          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            // TransitionComponent={Transition}
          >
            <Tests Rowdata={selectedRow} />
          </Dialog>
        </>
      ) : (
        <>Loading</>
      )}
    </Box>
  );
};
