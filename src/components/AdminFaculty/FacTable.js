import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Avatar, Button, Checkbox, Stack } from "@mui/material";

export const FacTable = () => {
  const columns = [
    {
      field: "avatar",
      headerName: "",
      width: 90,
      renderCell: () => {
        return (
          <>
            <Avatar src="/images/admin/Avatar.png" />
          </>
        );
      },
    },
    { field: "Name", headerName: "Name", width: 180 },
    {
      field: "Role",
      headerName: "Role",
      width: 150,
      
    },
    {
      field: "status",
      headerName: "Inactive/Active",
      width: 220,
      renderCell: () => {
        return (
          <Stack direction="row" justifyContent="center" alignItems="center">
            <Checkbox />
            <span>Inactive</span>
          </Stack>
        );
      },
      
    },
    {
      field: "JDate",
      headerName: "Joining Date",
      width: 150,
      
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        // const currentRow = params.row;
        return (
          <Stack
            direction= "row"
            spacing= {-3}
          >
            <Button
            onClick={()=> {
              alert("You sure want to Edit this user?")
            }}
            >
              <img src="/images/admin/edit.png" alt="" />
            </Button>
            <Button
              onClick={() => {
                alert("You sure want to Delete this user?")
                // alert(currentRow.Name);
              }}
            >
              <img src="/images/admin/delete.png" alt="" />
            </Button>
          </Stack>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      Name: "Navya Chopra",
      Role: "Admin",
      Mobile: "+91 1234567890",
      JDate: "02-05-2022",
    },
    {
      id: 2,
      Name: "Kanishka Singh",
      Role: "Editorial",
      Mobile: "+91 1234567890",
      JDate: "02-05-2022",
    },
    {
      id: 3,
      Name: "Srishti Mishra",
      Role: "Courses",
      Mobile: "+91 1234567890",
      JDate: "02-05-2022",
    },
    {
      id: 4,
      Name: "Srishti Mishra",
      Role: "Courses",
      Mobile: "+91 1234567890",
      JDate: "02-05-2022",
    },
    {
      id: 5,
      Name: "Srishti Mishra",
      Role: "Courses",
      Mobile: "+91 1234567890",
      JDate: "02-05-2022",
    },
    {
      id: 6,
      Name: "Srishti Mishra",
      Role: "Courses",
      Mobile: "+91 1234567890",
      JDate: "02-05-2022",
    },
    {
      id: 7,
      Name: "Srishti Mishra",
      Role: "Courses",
      Mobile: "+91 1234567890",
      JDate: "02-05-2022",
    },
    {
      id: 8,
      Name: "Srishti Mishra",
      Role: "Courses",
      Mobile: "+91 1234567890",
      JDate: "02-05-2022",
    },
    {
      id: 9,
      Name: "Kanishka Singh",
      Role: "Courses",
      Mobile: "+91 1234567890",
      JDate: "02-05-2022",
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
