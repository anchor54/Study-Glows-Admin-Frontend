import React, { useState } from "react";
import { AdminNavbar } from "../../components/AdminNavbar/AdminNavbar";
import { Divider, Grid, Stack } from "@mui/material";
import { AdminCards } from "../../components/AdminCard/AdminCards";
import "./Dashboard.css";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { AdminSidebar } from "../../components/AdminSidebar/AdminSidebar";

export const Dashboard = () => {

  const rows = [
    {name: 'Nirmala Sitaraman', course: 'How to not ruin a nation’s economy..', date: '18 August 2022', time: '10:15'},
    {name: 'Nirmala Sitaraman', course: 'How to not ruin a nation’s economy..', date: '18 August 2022', time: '10:15'},
    {name: 'Nirmala Sitaraman', course: 'How to not ruin a nation’s economy..', date: '18 August 2022', time: '10:15'},
    {name: 'Nirmala Sitaraman', course: 'How to not ruin a nation’s economy..', date: '18 August 2022', time: '10:15'},
    {name: 'Nirmala Sitaraman', course: 'How to not ruin a nation’s economy..', date: '18 August 2022', time: '10:15'},
    {name: 'Nirmala Sitaraman', course: 'How to not ruin a nation’s economy..', date: '18 August 2022', time: '10:15'},
    {name: 'Nirmala Sitaraman', course: 'How to not ruin a nation’s economy..', date: '18 August 2022', time: '10:15'},
    {name: 'Nirmala Sitaraman', course: 'How to not ruin a nation’s economy..', date: '18 August 2022', time: '10:15'},
    {name: 'Nirmala Sitaraman', course: 'How to not ruin a nation’s economy..', date: '18 August 2022', time: '10:15'},
    {name: 'Nirmala Sitaraman', course: 'How to not ruin a nation’s economy..', date: '18 August 2022', time: '10:15'},
    {name: 'Nirmala Sitaraman', course: 'How to not ruin a nation’s economy..', date: '18 August 2022', time: '10:15'},
  ];
  const data = {
    labels: ["AC", "NAC", "TS"],
    datasets: [
      {
        label: "% of Sales",
        data: [15, 25, 60],
        backgroundColor: ["#156C3C", "#0373BA", "#C42730"],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // const [collapsed, setcollapsed] = useState(false);
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
      {/* <div>
        {broken && (
        <button className="sb-button" onClick={() => setToggled(!toggled)}>
            Toggle
        </button>
        )}
    </div> */}
      <div className="main-dash">
        <AdminNavbar />
        <div className="dash-content">
          <Grid container className="grid-container">
            <Grid item md={6} xs={12} className="grid-item">
              <Grid container sx={{ justifyContent: "center" }}>
                <Grid item md={6}>
                  <AdminCards
                    bg="#C4C4C4"
                    barColor="#FCB03E"
                    heading="Total Students"
                    number="3280"
                    value={50}
                    content="80% Increase in 20 Days"
                    margin="0"
                  />
                </Grid>
                <Grid item md={6}>
                  <AdminCards
                    bg="#C4C4C4"
                    barColor="#FCB03E"
                    heading="New Students"
                    number="245"
                    value={40}
                    content="50% Increase in 20 Days"
                    margin="0"
                  />
                </Grid>
                <Grid item md={6}>
                  <AdminCards
                    bg="#C4C4C4"
                    barColor="#C42730"
                    heading="Total Course"
                    number="28"
                    value={65}
                    content="76% Increase in 20 Days"
                  />
                </Grid>
                <Grid item md={6}>
                  <AdminCards
                    bg="#C4C4C4"
                    barColor="#C42730"
                    heading="Total Sales"
                    number="₹25160"
                    value={20}
                    content="30% Increase in 20 Days"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              className="grid-item"
              sx={{
                background: "white",
                boxShadow: "4px 4px 20px 8px rgba(0, 0, 0, 0.08)",
                borderRadius: "5px",
              }}
            >
              <Grid
                container
                sx={{
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid item md={6} xs={12}>
                  <div className="chart">
                    <Pie
                      option={{
                        legend: { display: false },
                        maintainAspectRatio: false,
                        // datalabels: {
                        //   display: true,
                        //   color: "white",
                        // },
                        tooltips: {
                          backgroundColor: "#5a6e7f",
                        },
                      }}
                      data={data}
                    />
                  </div>
                </Grid>
                <Grid item md={6} xs={12}>
                  <div className="chart-data">
                    <div className="col-1">
                      <h3 className="chart-head">Total Sales</h3>
                      <h4 className="chart-subhead">Academic Courses</h4>
                      <h4 className="chart-subhead">Non-Academic Courses</h4>
                      <h4 className="chart-subhead">Test Series</h4>
                    </div>
                    <div className="col-2">
                      <h1 className="price-head">₹25160</h1>
                      <h1 className="price-subhead">₹25160</h1>
                      <h1 className="price-subhead">₹25160</h1>
                      <h1 className="price-subhead">₹25160</h1>
                    </div>
                  </div>
                </Grid>
              </Grid>
              {/* <div className="chart">
                <Pie
                  option={{
                    legend: { display: true },
                    maintainAspectRatio: false,
                    datalabels: {
                      display: true,
                      color: "white",
                    },
                    tooltips: {
                      backgroundColor: "#5a6e7f",
                    },
                  }}
                  data={data}
                />
                <div className="chart-data">
                  <div className="col-1">
                    <h3 className="chart-head">Total Sales</h3>
                    <h4 className="chart-subhead">Academic Courses</h4>
                    <h4 className="chart-subhead">Non-Academic Courses</h4>
                    <h4 className="chart-subhead">Test Series</h4>
                  </div>
                  <div className="col-2">
                    <h1 className="price-head">₹25160</h1>
                    <h1 className="price-subhead">₹25160</h1>
                    <h1 className="price-subhead">₹25160</h1>
                    <h1 className="price-subhead">₹25160</h1>
                  </div>
                </div>
              </div> */}
            </Grid>
          </Grid>
          <Grid container className="grid-container-2"
          justifyContent="center"
          alignItems="center"
          >
            <Grid
              item
              md={4}
              xs={12}
              className="grid-item"
              sx={{
                height: "300px",
                padding: "1.5%",
                overflow: "scroll",
                background: "#FFF",
                boxShadow: "4px 4px 20px 8px rgba(0, 0, 0, 0.08)",
                borderRadius: "5px"
              }}
            >
              <Stack spacing={2}>
                <div>Upcoming Events</div>
                <Grid
                  container
                  className="grid-container"
                  // border={1}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid
                    item
                    md={3}
                    xs={3}
                    // border={2}
                    // alignItems="center"
                    // justifyContent="center"
                    className="event-date-div"
                  >
                    <div className="event-date">
                      11 <br /> May
                    </div>
                  </Grid>
                  <Grid
                    item
                    md={9}
                    xs={9}
                    // border={2}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Stack>
                      <div>UPSC Pre Live Class</div>
                      <div className="event-time">08:30 - 12:30</div>
                      <div className="event-time">
                        Kanishka Singh, Srishti Mehra
                      </div>
                    </Stack>
                  </Grid>
                </Grid>
                <Divider />
                <Grid
                  container
                  className="grid-container"
                  // border={1}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid
                    item
                    md={3}
                    xs={3}
                    // border={2}
                    // alignItems="center"
                    // justifyContent="center"
                    className="event-date-div"
                  >
                    <div className="event-date">
                      11 <br /> May
                    </div>
                  </Grid>
                  <Grid
                    item
                    md={9}
                    xs={9}
                    // border={2}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Stack>
                      <div>UPSC Pre Live Class</div>
                      <div className="event-time">08:30 - 12:30</div>
                      <div className="event-time">
                        Kanishka Singh, Srishti Mehra
                      </div>
                    </Stack>
                  </Grid>
                </Grid>
                <Divider />
                <Grid
                  container
                  className="grid-container"
                  // border={1}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid
                    item
                    md={3}
                    xs={3}
                    // border={2}
                    // alignItems="center"
                    // justifyContent="center"
                    className="event-date-div"
                  >
                    <div className="event-date">
                      11 <br /> May
                    </div>
                  </Grid>
                  <Grid
                    item
                    md={9}
                    xs={9}
                    // border={2}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Stack>
                      <div>UPSC Pre Live Class</div>
                      <div className="event-time">08:30 - 12:30</div>
                      <div className="event-time">
                        Kanishka Singh, Srishti Mehra
                      </div>
                    </Stack>
                  </Grid>
                </Grid>
                <Divider />
                <Grid
                  container
                  className="grid-container"
                  // border={1}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid
                    item
                    md={3}
                    xs={3}
                    // border={2}
                    // alignItems="center"
                    // justifyContent="center"
                    className="event-date-div"
                  >
                    <div className="event-date">
                      11 <br /> May
                    </div>
                  </Grid>
                  <Grid
                    item
                    md={9}
                    xs={9}
                    // border={2}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Stack>
                      <div>UPSC Pre Live Class</div>
                      <div className="event-time">08:30 - 12:30</div>
                      <div className="event-time">
                        Kanishka Singh, Srishti Mehra
                      </div>
                    </Stack>
                  </Grid>
                </Grid>
                <Divider />
                <Grid
                  container
                  className="grid-container"
                  // border={1}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid
                    item
                    md={3}
                    xs={3}
                    // border={2}
                    // alignItems="center"
                    // justifyContent="center"
                    className="event-date-div"
                  >
                    <div className="event-date">
                      11 <br /> May
                    </div>
                  </Grid>
                  <Grid
                    item
                    md={9}
                    xs={9}
                    // border={2}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Stack>
                      <div>UPSC Pre Live Class</div>
                      <div className="event-time">08:30 - 12:30</div>
                      <div className="event-time">
                        Kanishka Singh, Srishti Mehra
                      </div>
                    </Stack>
                  </Grid>
                </Grid>
              </Stack>
            </Grid>
            <Grid
              item
              md={7}
              xs={12}
              className="grid-item"
              sx={{
                height: "300px",
                padding: "1.5%",
                marginLeft: "2%",
                overflow: "scroll",
                background: "#FFF",
                boxShadow: "4px 4px 20px 8px rgba(0, 0, 0, 0.08)",
                borderRadius: "5px",
              }}
            >
              <Stack spacing={2}>
                <div>New Enrolments</div>
                <TableContainer>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>STUDENT NAME</TableCell>
                        <TableCell align="center">COURSE NAME</TableCell>
                        <TableCell align="center">DATE</TableCell>
                        <TableCell align="center">TIME</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.course}</TableCell>
                        <TableCell align="right">{row.date}</TableCell>
                        <TableCell align="right">{row.time}</TableCell>
                      </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Stack>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};
