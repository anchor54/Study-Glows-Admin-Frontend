import React from "react";
import { AdminNavbar } from "../../../components/AdminNavbar/AdminNavbar";
import "./Payment.scss";
import { InputAdornment, Stack, TextField } from "@mui/material";
import { Table } from "../../../components/AdminPayment/Table";
import { AdminSidebar } from "../../../components/AdminSidebar/AdminSidebar";
export const OrderDetails = () => {
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
            <div className="all-user-strip">Order Details</div>
            <div className="OrderPaper">
              <Stack direction="column" sx={{ width: "100%" }}>
                <div className="orderitem-1" style={{ textAlign: "start" }}>
                  <Stack sx={{ width: "100%" }}>
                    <div className="orderdiv1">
                      <span className="detail-head">Order #54606 details</span>
                      <Stack direction="row" className="payment-details">
                        <div>
                          Payment via Credit Card/ Debit Card/ Net Banking
                        </div>
                        <div>Paid on February 28, 2022 @ 02:25 AM</div>
                      </Stack>
                      <div className="detail-container">
                        <Stack direction="row" justifyContent="left" gap={5}>
                          <div className="left-details">
                            <div>General</div>
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <TextField
                                id="outlined-basic"
                                label="Date created:"
                                variant="outlined"
                              />
                              &nbsp;@
                              <TextField
                                defaultValue={14}
                                id="outlined-start-adornment"
                                sx={{ marginX: "5px", width: "6ch" }}
                              />
                              :
                              <TextField
                                defaultValue={24}
                                id="outlined-start-adornment"
                                sx={{ marginX: "5px", width: "6ch" }}
                              />
                            </div>
                            <div>
                              <TextField
                                id="outlined-basic"
                                label="Status"
                                variant="outlined"
                                defaultValue="Completed"
                              />
                            </div>
                          </div>
                          <div className="right-details">
                            <div>Billing</div>
                            <span>Ashwini Burkul</span>
                            <div>
                              Email Address:
                              <p>
                                ashwini1234@gmail,com Send invoice via Email
                              </p>
                            </div>
                            <div>
                              Phone
                              <p>+91 1234567890</p>
                            </div>
                          </div>
                        </Stack>
                      </div>
                    </div>
                  </Stack>
                </div>
                <div className="orderitem-2" style={{ textAlign: "start", marginTop: '4%' }}>
                  <Stack sx={{ width: "100%" }} justifyContent="center">
                    <div className="orderdiv2">
                      {/* <span className="detail-head">Order #54606 details</span> */}
                      <Stack direction="row" className="payment-details">
                        <div>
                          Item
                        </div>
                        <div>Cost</div>
                        <div>Qty</div>
                        <div>Total</div>
                      </Stack>
                      <div className="detail-container">
                        <Stack direction="row" justifyContent="left" gap={5}>
                          <div className="left-details">
                            <div>General</div>
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <TextField
                                id="outlined-basic"
                                label="Date created:"
                                variant="outlined"
                              />
                              &nbsp;@
                              <TextField
                                defaultValue={14}
                                id="outlined-start-adornment"
                                sx={{ marginX: "5px", width: "6ch" }}
                              />
                              :
                              <TextField
                                defaultValue={24}
                                id="outlined-start-adornment"
                                sx={{ marginX: "5px", width: "6ch" }}
                              />
                            </div>
                            <div>
                              <TextField
                                id="outlined-basic"
                                label="Status"
                                variant="outlined"
                                defaultValue="Completed"
                              />
                            </div>
                          </div>
                          <div className="right-details">
                            <div>Billing</div>
                            <span>Ashwini Burkul</span>
                            <div>
                              Email Address:
                              <p>
                                ashwini1234@gmail,com Send invoice via Email
                              </p>
                            </div>
                            <div>
                              Phone
                              <p>+91 1234567890</p>
                            </div>
                          </div>
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
