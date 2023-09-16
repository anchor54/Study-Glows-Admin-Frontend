import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {  Button } from "@mui/material";

export const ProductTable = () => {
  const columns = [
    {
      field: "No",
      headerName: "No.",
      width: 60,
    },
    { field: "Name", headerName: "Name of the course", width: 150 },
    {
        field: "StartingDate",
        headerName: "Starting Date",
        width: 100,
        
      },
    {
        field: "EndDate",
        headerName: "End Date",
        width: 100,
        
      },
    {
      field: "Educators",
      headerName: "Educators",
      width: 150,
      
    },
    {
      field: "Category",
      headerName: "Category",
      width: 150,
      
    },
    {
      field: "Price",
      headerName: "Price",
      width: 100,
      
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        // const currentRow = params.row;
        return (
            <Button
              onClick={() => {
                alert("You sure want to Edit this user?")
                // alert(currentRow.Name);
              }}
            >
              Edit
            </Button>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      No: "01",
      Name: "UPSC CSE Foundation Course (Pre+Mains)",
      StartingDate: "02-05-2022",
      EndDate: "Ongoing",
      Educators: "Siddhant Agnihotri, Kanishka Singh...",
      Category: "Academic",
      Price: "₹ 250",
    },
    {
      id: 2,
      No: "02",
      Name: "Kanishka Singh",
      StartingDate: "02-05-2022",
      EndDate: "Going",
      Educators: "Siddhant Agnihotri, Kanishka Singh...",
      Category: "Academic",
      Price: "₹ 250",
    },
    {
      id: 3,
      No: "03",
      Name: "Srishti Mishra",
      StartingDate: "02-05-2022",
      EndDate: "Ongoing",
      Educators: "Siddhant Agnihotri, Kanishka Singh...",
      Category: "Academic",
      Price: "₹ 250",
    },
    {
      id: 4,
      No: "04",
      Name: "Srishti Mishra",
      StartingDate: "02-05-2022",
      EndDate: "Ongoing",
      Educators: "Siddhant Agnihotri, Kanishka Singh...",
      Category: "Academic",
      Price: "₹ 250",
    },
    {
      id: 5,
      No: "05",
      Name: "Srishti Mishra",
      StartingDate: "02-05-2022",
      EndDate: "Ongoing",
      Educators: "Siddhant Agnihotri, Kanishka Singh...",
      Category: "Academic",
      Price: "₹ 250",
    },
    {
      id: 6,
      No: "06",
      Name: "Srishti Mishra",
      StartingDate: "02-05-2022",
      EndDate: "Ongoing",
      Educators: "Siddhant Agnihotri, Kanishka Singh...",
      Category: "Academic",
      Price: "₹ 250",
    },
    {
      id: 7,
      No: "07",
      Name: "Srishti Mishra",
      StartingDate: "02-05-2022",
      EndDate: "Ongoing",
      Educators: "Siddhant Agnihotri, Kanishka Singh...",
      Category: "Academic",
      Price: "₹ 250",
    },
    {
      id: 8,
      No: "08",
      Name: "Srishti Mishra",
      StartingDate: "02-05-2022",
      EndDate: "Ongoing",
      Educators: "Siddhant Agnihotri, Kanishka Singh...",
      Category: "Academic",
      Price: "₹ 250",
    },
    {
      id: 9,
      No: "09",
      Name: "Kanishka Singh",
      StartingDate: "02-05-2022",
      EndDate: "Ongoing",
      Educators: "Siddhant Agnihotri, Kanishka Singh...",
      Category: "Academic",
      Price: "₹ 250",
    },
  ];

  // Otherwise filter will be applied on fields such as the hidden column id

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={rows}
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
    </Box>
  );
};
