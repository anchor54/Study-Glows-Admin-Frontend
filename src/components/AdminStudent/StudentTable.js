import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Avatar, Button, Stack } from "@mui/material";

export const StudentTable = () => {
  const columns = [
    {
      field: "avatar",
      headerName: "",
      width: 60,
      renderCell: () => {
        return (
          <>
            <Avatar src="/images/admin/Avatar.png" />
          </>
        );
      },
    },
    { field: "Name", headerName: "Name", width: 120 },
    {
      field: "Category",
      headerName: "Category",
      width: 100,
      
    },
    {
      field: "Title",
      headerName: "Title",
      width: 170,
      
    },
    {
      field: "Mobile",
      headerName: "Mobile",
      width: 150,
      
    },
    {
      field: "Email",
      headerName: "Email",
      type: "email",
      width: 150,
      
    },
    {
      field: "EDate",
      headerName: "Enrollment Date",
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
              alert("You sure want to Download this user?")
            }}
            >
              <img src="/images/admin/download.png" alt="" />
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
      Name: "Navya Chopra",
      Category: "Admin",
      Title: 'UPSC CSE Foundation Course (Pre+Mains)',
      Mobile: "+91 1234567890",
      Email: "siddhantagnihotri@gmail.com",
      EDate: "02-05-2022",
    },
    {
      id: 2,
      Name: "Kanishka Singh",
      Category: "Editorial",
      Title: 'UPSC CSE Foundation Course (Pre+Mains)',
      Mobile: "+91 1234567890",
      Email: "siddhantagnihotri@gmail.com",
      EDate: "02-05-2022",
    },
    {
      id: 3,
      Name: "Srishti Mishra",
      Category: "Courses",
      Title: 'UPSC CSE Foundation Course (Pre+Mains)',
      Mobile: "+91 1234567890",
      Email: "siddhantagnihotri@gmail.com",
      EDate: "02-05-2022",
    },
    {
      id: 4,
      Name: "Srishti Mishra",
      Category: "Courses",
      Title: 'UPSC CSE Foundation Course (Pre+Mains)',
      Mobile: "+91 1234567890",
      Email: "siddhantagnihotri@gmail.com",
      EDate: "02-05-2022",
    },
    {
      id: 5,
      Name: "Srishti Mishra",
      Category: "Courses",
      Title: 'UPSC CSE Foundation Course (Pre+Mains)',
      Mobile: "+91 1234567890",
      Email: "siddhantagnihotri@gmail.com",
      EDate: "02-05-2022",
    },
    {
      id: 6,
      Name: "Srishti Mishra",
      Category: "Courses",
      Title: 'UPSC CSE Foundation Course (Pre+Mains)',
      Mobile: "+91 1234567890",
      Email: "siddhantagnihotri@gmail.com",
      EDate: "02-05-2022",
    },
    {
      id: 7,
      Name: "Srishti Mishra",
      Category: "Courses",
      Title: 'UPSC CSE Foundation Course (Pre+Mains)',
      Mobile: "+91 1234567890",
      Email: "siddhantagnihotri@gmail.com",
      EDate: "02-05-2022",
    },
    {
      id: 8,
      Name: "Srishti Mishra",
      Category: "Courses",
      Title: 'UPSC CSE Foundation Course (Pre+Mains)',
      Mobile: "+91 1234567890",
      Email: "siddhantagnihotri@gmail.com",
      EDate: "02-05-2022",
    },
    {
      id: 9,
      Name: "Kanishka Singh",
      Category: "Courses",
      Title: 'UPSC CSE Foundation Course (Pre+Mains)',
      Mobile: "+91 1234567890",
      Email: "siddhantagnihotri@gmail.com",
      EDate: "02-05-2022",
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
