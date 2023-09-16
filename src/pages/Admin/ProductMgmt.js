import React, { useState } from "react";
import { AdminNavbar } from "../../components/AdminNavbar/AdminNavbar";
import { Button, Checkbox, Stack } from "@mui/material";
import './Product.scss';
import { ProductTable } from "../../components/AdminProduct/ProductTable";
import { AdminSidebar } from "../../components/AdminSidebar/AdminSidebar";
export const ProductMgmt = () => {

  const [list, setList] = useState(true);
  const [toggled, setToggled] = useState(false);
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
            <Stack sx={{ width: '90%'}}>
                <div className="all-user-strip">
                    All Products
                </div>
                <div>
                    <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={1}
                    justifyContent="space-between"
                    >
                        <Stack direction="row">
                            <div className="legends"><Checkbox />Non-Academic Courses</div>
                            <div className="legends"><Checkbox />Academic Courses</div>
                            <div className="legends"><Checkbox />Test Series</div>
                        </Stack>
                        <Button onClick={()=> setList(true)}
                            variant="contained"
                            sx={{
                                background: "#025D97"
                            }}
                        >
                            Make Bundle
                        </Button>
                    </Stack>
                </div>
                <div className="userGrid">
                    <ProductTable />
                </div>
            </Stack>
        </div>
      </div>
    </div>
  );
};
