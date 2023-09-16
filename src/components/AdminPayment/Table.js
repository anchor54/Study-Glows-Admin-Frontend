import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useState } from "react";
import publicAxios from "../../axios/publicAxios";

export const Table = () => {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [user, setUser] = useState();

  const getInfo = async () => {
    await publicAxios
         .get('http://65.0.164.61/allorders')
         .then((res) => {
          //  console.log(res.data);
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
 }
  const getUser = async () => {
    await publicAxios
         .get('http://65.0.164.61/check')
         .then((userd) => {
          //  console.log(userd.data);
           if (userd.status === 200) {
             setUser(userd.data);
             setLoading(false);
           }
         })
         .catch((e) => {
           if (e.response && e.response.status === 404) {
             setUser(true);
             setLoading(false);
           }
           console.info("error", e);
         });
 }
 const findUser = (pok) => {
  for (let index = 0; index < user?.length; index++) {
    const userelement = user[index];
    // console.log("USER: ", userelement.full_name);
    if(userelement.id === pok){
      return userelement.full_name;
    }
  }
 }
 const info = () => {

  for (let index = 0; index < data?.length; index++) {
    // data[index].user = "ESHLLER";
    let Username = findUser(data[index].user);
    data[index].user = Username;
    // console.log(data[index]);
    data[index].productName = data[index].cart.product_quantity[0]?.type;
    // var hell = data[index].cart.product_quantity[0];
    // console.log(data[index].cart.product_quantity[0]?.total_amount);
    data[index].price = data[index].cart.product_quantity[0]?.total_amount;
  }
 }
   useEffect(() => {
       setLoading(true);
       getInfo();
       getUser();
     }, []);
     useEffect(() => {
       info();
       findUser(19);
     }, [data, user])
     
  const columns = [
    { field: "id", headerName: "Order Id.", width: 90 },
    { field: "user", headerName: "Name", width: 150 },
    {
      field: "productName",
      headerName: "Product Name",
      width: 150,
      
    },
    // {
    //   field: "ProductC",
    //   headerName: "Product Category",
    //   width: 150,
      
    // },
    {
      field: "status",
      headerName: "Status",
      width: 90,
      
    },
    // {
    //   field: "Mobile",
    //   headerName: "Mobile No.",
    //   width: 100,
      
    // },
    {
      field: "order_placed",
      headerName: "Enrolment Date",
      width: 150,
      
    },
    {
      field: "price",
      headerName: "Amount",
      type: "number",
      width: 150,
      renderCell: (params) => {
        const currentRow = params.row;
        return (
          <>₹ {currentRow?.price}</>
        )
      },
    },
  ];

  const rows = [
    {
      id: 1,
      orderID: "#54605",
      Name: "Navya Chopra",
      ProductN: "UPSC CSE Foundation Course (Pre+Mains)",
      ProductC: "Academic",
      Status: "Fully Paid",
      Mobile: "+91 1234567890",
      Enrolment: "02-05-2022",
      Amount: "₹ 250",
    },
    {
      id: 2,
      orderID: "#5453",
      Name: "Kanishka Singh",
      ProductN: "UPSC CSE Foundation Course (Pre+Mains)",
      ProductC: "Academic",
      Status: "Fully Paid",
      Mobile: "+91 1234567890",
      Enrolment: "02-05-2022",
      Amount: "₹ 250",
    },
    {
      id: 3,
      orderID: "#5453",
      Name: "Srishti Mishra",
      ProductN: "UPSC CSE Foundation Course (Pre+Mains)",
      ProductC: "Academic",
      Status: "Fully Paid",
      Mobile: "+91 1234567890",
      Enrolment: "02-05-2022",
      Amount: "₹ 250",
    },
    {
      id: 4,
      orderID: "#5453",
      Name: "Srishti Mishra",
      ProductN: "UPSC CSE Foundation Course (Pre+Mains)",
      ProductC: "Academic",
      Status: "Fully Paid",
      Mobile: "+91 1234567890",
      Enrolment: "02-05-2022",
      Amount: "₹ 250",
    },
    {
      id: 5,
      orderID: "#5453",
      Name: "Srishti Mishra",
      ProductN: "UPSC CSE Foundation Course (Pre+Mains)",
      ProductC: "Academic",
      Status: "Fully Paid",
      Mobile: "+91 1234567890",
      Enrolment: "02-05-2022",
      Amount: "₹ 250",
    },
    {
      id: 6,
      orderID: "#5453",
      Name: "Srishti Mishra",
      ProductN: "UPSC CSE Foundation Course (Pre+Mains)",
      ProductC: "Academic",
      Status: "Fully Paid",
      Mobile: "+91 1234567890",
      Enrolment: "02-05-2022",
      Amount: "₹ 250",
    },
    {
      id: 7,
      orderID: "#5453",
      Name: "Srishti Mishra",
      ProductN: "UPSC CSE Foundation Course (Pre+Mains)",
      ProductC: "Academic",
      Status: "Fully Paid",
      Mobile: "+91 1234567890",
      Enrolment: "02-05-2022",
      Amount: "₹ 250",
    },
    {
      id: 8,
      orderID: "#5453",
      Name: "Srishti Mishra",
      ProductN: "UPSC CSE Foundation Course (Pre+Mains)",
      ProductC: "Academic",
      Status: "Fully Paid",
      Mobile: "+91 1234567890",
      Enrolment: "02-05-2022",
      Amount: "₹ 250",
    },
    {
      id: 9,
      orderID: "#5453",
      Name: "Kanishka Singh",
      ProductN: "UPSC CSE Foundation Course (Pre+Mains)",
      ProductC: "Academic",
      Status: "Fully Paid",
      Mobile: "+91 1234567890",
      Enrolment: "02-05-2022",
      Amount: "₹ 250",
    },
  ];

  // Otherwise filter will be applied on fields such as the hidden column id

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      {data ? (
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

      ):(<>Loading</>)}
    </Box>
  );
};
