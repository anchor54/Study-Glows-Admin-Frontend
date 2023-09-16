import * as React from "react";
import Box from "@mui/material/Box";
import { Avatar, Button, Divider, Grid, Stack } from "@mui/material";
import { userData } from "./data";
import "./UserGrid.scss";
import { useEffect } from "react";
import publicAxios from "../../axios/publicAxios";
import { useState } from "react";
export const UserGridView = () => {

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
  return (
    <>
    {loading ? (<>Loading</>): (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        overflowY: "scroll",
        fontFamily: "Lato",
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data?.map((user) => (
          <Grid item xs={12} sm={4} md={4} key={user.id}>
            <div
              style={{
                background: "white",
                boxShadow: "4px 4px 20px 8px rgba(0, 0, 0, 0.08)",
                borderRadius: "5px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: "5%",
                }}
              >
                <Avatar
                  src={user.profile_image}
                  sx={{ width: 90, height: 90 }}
                >{user.full_name[0]}</Avatar>
              </div>
              <Stack direction="column">
                <div className="name">{user.full_name}</div>
                <div className="card-body">
                  <Stack direction="column" spacing={2}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      sx={{ paddingX: "2.5%" }}
                    >
                      <div className="dept">Department:</div>
                      <div className="dept-data">Courses</div>
                    </Stack>
                    <Divider />
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      sx={{ paddingX: "2.5%" }}
                    >
                      <div className="dept">Role:</div>
                      <div className="dept-data">Admin</div>
                    </Stack>
                    <Divider />
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      sx={{ paddingX: "2.5%" }}
                    >
                      <div className="dept">Phone No:</div>
                      <div className="dept-data">{user.phone}</div>
                    </Stack>
                    <Divider />
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      sx={{ paddingX: "2.5%" }}
                    >
                      <div className="dept">Email:</div>
                      <div className="dept-data">{user.email}</div>
                    </Stack>
                    <Divider />
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      sx={{ paddingX: "2.5%" }}
                    >
                      <div className="dept">Address:</div>
                      <div className="dept-data">{user.address?(<>{user.address}</>):(<>Not Available</>)}</div>
                    </Stack>
                    <Divider />
                    <div className="readMore">
                      <Button variant="outlined" sx={{ borderRadius: "8px" }}>
                        Read More
                      </Button>
                    </div>
                  </Stack>
                </div>
              </Stack>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
    )}
    </>
  );
};
