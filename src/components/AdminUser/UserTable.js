import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Avatar, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import publicAxios from "../../axios/publicAxios";
import { useState } from "react";
import { useEffect } from "react";

export const UserTable = () => {

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  const fetchInfo = async () => {
     await publicAxios
          .get('http://65.0.164.61/check/')
          .then((res) => {
            console.log(res.data);
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
            setError(true);
            console.info("error", e);
          });
  }
    useEffect(() => {
        setLoading(true);
        setError(false);
        fetchInfo();
      }, []);

  const navigate = useNavigate();
  const columns = [
    {
      field: "profile_image",
      headerName: "",
      width: 90,
      renderCell: (params) => {
        const currentRow = params.row;
        // console.log("Current Row: ",currentRow);
        return (
          <>
            <Avatar src={currentRow.profile_image} />
          </>
        );
      },
    },
    { field: "full_name", headerName: "Name", width: 150 },
    {
      field: "Role",
      headerName: "Role",
      width: 150,
      renderCell: () => {
        return (<>ROLE</>)
      } 
    },
    {
      field: "phone",
      headerName: "Mobile",
      width: 150,
      
    },
    {
      field: "email",
      headerName: "Email",
      type: "email",
      width: 150,
      
    },
    {
      field: "JDate",
      headerName: "Joining Date",
      type: "email",
      width: 150,
      renderCell: () => {
        return <>JDATA</>
      }
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
      Name: "Navya Chopra",
      Role: "Admin",
      Mobile: "+91 1234567890",
      Email: "siddhantagnihotri@gmail.com",
      JDate: "02-05-2022",
    },
    {
      id: 2,
      Name: "Kanishka Singh",
      Role: "Editorial",
      Mobile: "+91 1234567890",
      Email: "siddhantagnihotri@gmail.com",
      JDate: "02-05-2022",
    },
    {
      id: 3,
      Name: "Srishti Mishra",
      Role: "Courses",
      Mobile: "+91 1234567890",
      Email: "siddhantagnihotri@gmail.com",
      JDate: "02-05-2022",
    },
    {
      id: 4,
      Name: "Srishti Mishra",
      Role: "Courses",
      Mobile: "+91 1234567890",
      Email: "siddhantagnihotri@gmail.com",
      JDate: "02-05-2022",
    },
    {
      id: 5,
      Name: "Srishti Mishra",
      Role: "Courses",
      Mobile: "+91 1234567890",
      Email: "siddhantagnihotri@gmail.com",
      JDate: "02-05-2022",
    },
    {
      id: 6,
      Name: "Srishti Mishra",
      Role: "Courses",
      Mobile: "+91 1234567890",
      Email: "siddhantagnihotri@gmail.com",
      JDate: "02-05-2022",
    },
    {
      id: 7,
      Name: "Srishti Mishra",
      Role: "Courses",
      Mobile: "+91 1234567890",
      Email: "siddhantagnihotri@gmail.com",
      JDate: "02-05-2022",
    },
    {
      id: 8,
      Name: "Srishti Mishra",
      Role: "Courses",
      Mobile: "+91 1234567890",
      Email: "siddhantagnihotri@gmail.com",
      JDate: "02-05-2022",
    },
    {
      id: 9,
      Name: "Kanishka Singh",
      Role: "Courses",
      Mobile: "+91 1234567890",
      Email: "siddhantagnihotri@gmail.com",
      JDate: "02-05-2022",
    },
  ];

  // Otherwise filter will be applied on fields such as the hidden column id

  return (
    <>
    {loading ? (<>Loading</>):(
      <>
      {data ? (
        <Box sx={{ height: "100%", width: "100%" }}>
          <DataGrid
            rows={data}
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
      ):(<>No Data available</>)}
      </> 
    )}
    </>
  );
};
