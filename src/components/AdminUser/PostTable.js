import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Avatar, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const PostTable = () => {

  const navigate = useNavigate();
  const columns = [
    { field: "Title", headerName: "Title", width: 250 },
    {
      field: "Category",
      headerName: "Category",
      width: 100,
      
    },
    {
      field: "Date",
      headerName: "Date",
      type: "email",
      width: 100,
      
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
              navigate('/admin/user/editUser')
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
      // renderCell: () => {
      //   return (
      //     <Stack
      //       direction={{ xs: 'column', sm: 'row' }}
      //       spacing={{ xs: 1, sm: 2, md: 2 }}
      //     >
      //       <Button>
      //         <img src="/images/admin/edit.png" alt="" />
      //       </Button>
      //       <Button>
      //         <img src="/images/admin/delete.png" alt="" />
      //       </Button>
      //     </Stack>
      //   );
      // }
    },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
  ];

  const rows = [
    {
      id: 1,
      Title: "UPSC CSE Foundation Course (Pre+Mains)",
      Category: "Academic Course",
      Mobile: "+91 1234567890",
      Email: "siddhantagnihotri@gmail.com",
      Date: "02-05-2022",
    },
    {
      id: 2,
      Title: "UPSC CSE Prelims Paper 4",
      Category: "Test Series",
      Mobile: "+91 1234567890",
      Email: "siddhantagnihotri@gmail.com",
      Date: "02-05-2022",
    },
    {
      id: 3,
      Title: "IISC Study: Microplastics found in Cauvery River ",
      Category: "Current Affairs",
      Mobile: "+91 1234567890",
      Email: "siddhantagnihotri@gmail.com",
      Date: "02-05-2022",
    },
    {
      id: 4,
      Title: "IISC Study: Microplastics found in Cauvery River ",
      Category: "Current Affairs",
      Mobile: "+91 1234567890",
      Email: "siddhantagnihotri@gmail.com",
      Date: "02-05-2022",
    },
    {
      id: 5,
      Title: "IISC Study: Microplastics found in Cauvery River ",
      Category: "Current Affairs",
      Mobile: "+91 1234567890",
      Email: "siddhantagnihotri@gmail.com",
      Date: "02-05-2022",
    },
    {
      id: 6,
      Title: "IISC Study: Microplastics found in Cauvery River ",
      Category: "Current Affairs",
      Mobile: "+91 1234567890",
      Email: "siddhantagnihotri@gmail.com",
      Date: "02-05-2022",
    },
    {
      id: 7,
      Title: "Repairing India-Nepal Ties",
      Category: "Editorials",
      Mobile: "+91 1234567890",
      Email: "siddhantagnihotri@gmail.com",
      Date: "02-05-2022",
    },
    {
      id: 8,
      Title: "Repairing India-Nepal Ties",
      Category: "Editorials",
      Mobile: "+91 1234567890",
      Email: "siddhantagnihotri@gmail.com",
      Date: "02-05-2022",
    },
    {
      id: 9,
      Title: "UPSC CSE Foundation Course (Pre+Mains)",
      Category: "Editorials",
      Mobile: "+91 1234567890",
      Email: "siddhantagnihotri@gmail.com",
      Date: "02-05-2022",
    },
  ];

  // Otherwise filter will be applied on fields such as the hidden column id

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <Typography textAlign="start" variant="h6">Posts</Typography>
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
