import React, { useState } from "react";
import { AdminNavbar } from "../../../components/AdminNavbar/AdminNavbar";
import {
  Button,
  Stack,
  // TextField,
  // Checkbox,
  // FormControlLabel,
  Grid,
  Divider,
  Typography,
  TextField,
  Checkbox,
  Chip,
  ListItem,
  Paper,
  styled,
  Select,
  MenuItem,
} from "@mui/material";
import { AdminSidebar } from "../../../components/AdminSidebar/AdminSidebar";
import CancelIcon from "@mui/icons-material/Cancel";
import { useEffect } from "react";
import publicAxios from "../../../axios/publicAxios";
import { useNavigate } from "react-router-dom";

export const AddCourse = () => {

  const navigate = useNavigate();
  const [chipData, setChipData] = useState([
    "Siddant Agnihotri",
    "Indrajit Singh"
  ]);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [cat, setCat] = useState();
  const [localcat, setLocalCat] = useState();

  const [title, setTitle] = useState();
  const [img, setImg] = useState();
  const [about, setAbout] = useState([]);
  const [mrp, setMrp] = useState();
  const [price, setPrice] = useState();
  const [language, setLanguage] = useState();
  const [publish, setPublish] = useState();
  const [validity, setValidity] = useState();
  const [feature, setFeature] = useState([]);
  // const [category, setCategory] = useState([]); 
  const [faq, setFaq] = useState([]); 
  const [coursesection, setCourseSection] = useState([]); 
  const [instructor, setInstructor] = useState([]); 

  const getInfo = async () => {
    await publicAxios
      .get("http://65.0.164.61/instructors")
      .then((res) => {
        // console.log(res.data);
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
  };
  const getCategoryInfo = async () => {
    await publicAxios
      .get("http://65.0.164.61/allcategory")
      .then((res) => {
        // console.log("CAT: ",res.data);
        if (res.status === 200) {
          setCat(res.data);
          setLoading(false);
        }
      })
      .catch((e) => {
        if (e.response && e.response.status === 404) {
          setCat(true);
          setLoading(false);
        }
        console.info("error", e);
      });
  };
  const handleSubmit = (async) => {
    setLoading(true);
    newCourse();
    navigate("/addCourse");
    setLoading(false);
  }
  const newCourse = () => {
    const request_body = { title: title, about: about.toString(), mrp: mrp, price: price, language: language, publish: publish, feature: feature, category: localcat, faq: faq, coursesection: coursesection, instructor: instructor, validity: validity, thumbnail: img };
    publicAxios
      .post(`http://65.0.164.61/postcourse`, request_body)
      .then((res) => {
        console.log("POSTED DATA ",res);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    // setLoading(true);
    // newTest();
    // setLoading(false);
  }, [])
  
  useEffect(() => {
    console.log("IMAGE: ", img);
    setLoading(true);
    getInfo();
    getCategoryInfo();
    setLoading(false);
    console.log("ABOUT: ",about);
  }, [about, img]);
  const [edu, setEdu] = useState("");


  const handleChange = (event) => {
    // console.log("EVENT: ",event.target.value);
    setInstructor([...instructor, event.target.value]);
    setChipData(chipData => [...chipData,
      event.target.value
    ]
    );
  };

  const handleCatChange = (event) => {
    setLocalCat(event.target.value)
  }

  const VisuallyHiddenInput = styled("input")`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    left: 0;
    white-space: nowrap;
    width: 1px;
  `;
  

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip !== chipToDelete)
    );
  };
  

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
            <div className="all-user-strip">Add Course</div>
            <div className="UserPaper">
              <Grid
                container
                justifyContent="space-between"
                alignItems="space-between"
                sx={{ paddingTop: "2%", height: "max-content" }}
              >
                <Grid item xs={12} md={4}>
                  <div className="left-side-profile">
                    <Stack
                      direction="column"
                      sx={{
                        background: "#FFF",
                        boxShadow: "4px 4px 20px 8px rgba(0, 0, 0, 0.08)",
                        paddingTop: "5%",
                        borderRadius: "5px",
                      }}
                    >
                      <Grid
                        className="profile-card"
                        container
                        gap={3}
                        justifyContent="center"
                        marginBottom={2}
                      >
                        <Grid item xs={12} justifyContent="center">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            {/* <Button
                            role={undefined}
                            variant="outlined"
                            > */}
                            <Button
                              component="label"
                              role={undefined}
                              tabIndex={-1}
                              // color="neutral"
                            >
                              <img
                                src="/images/admin/addCourseImage.png"
                                sx={{ width: "150", height: "150" }}
                                alt="Add Course"
                              />
                              {/* Upload the Thumbnail */}
                              <VisuallyHiddenInput type="file" onChange={(event)=> {setImg(event.target.files[0])}} />
                            </Button>
                          </div>
                        </Grid>
                        <span style={{ fontWeight: "bold" }}>
                          Name of the course
                        </span>
                        <Divider sx={{ marginTop: "5%", marginBottom: "5%" }} />
                      </Grid>
                    </Stack>
                    <Stack
                      direction="column"
                      sx={{
                        background: "#FFF",
                        boxShadow: "4px 4px 20px 8px rgba(0, 0, 0, 0.08)",
                        marginTop: "5%",
                        paddingTop: "5%",
                        borderRadius: "5px",
                      }}
                    >
                      <Grid
                        className="profile-card"
                        container
                        gap={3}
                        sx={{ textAlign: "start" }}
                      >
                        <Grid item xs={12}>
                          <Stack
                            direction="column"
                            justifyContent="space-around"
                            sx={{ paddingX: "3%" }}
                          >
                            <div className="course-date">About Course</div>
                            <div
                              className="course-price"
                              style={{ marginTop: "2%", marginoBottom: "2%" }}
                            >
                              <Typography variant="caption">
                                Lorem Ipsum is simply dummy text ofthe printing
                                and typesetting
                              </Typography>
                            </div>
                          </Stack>
                          <Divider sx={{ marginTop: "5%" }} />
                        </Grid>
                        <Grid item xs={12}>
                          <Stack
                            direction="row"
                            justifyContent="space-between"
                            sx={{ paddingX: "3%" }}
                          >
                            <div className="course-price">Duration</div>
                            <div className="course-date">12 Months</div>
                          </Stack>
                          <Divider sx={{ marginTop: "5%" }} />
                        </Grid>
                        <Grid item xs={12}>
                          <Stack
                            direction="row"
                            justifyContent="space-between"
                            sx={{ paddingX: "3%" }}
                            alignItems="center"
                          >
                            <div className="course-price">Professor</div>
                            <div
                              className="course-date"
                              style={{ fontSize: "0.8rem" }}
                            >
                              Siddhant Agnihotri, Kanishka Singh
                            </div>
                          </Stack>
                          <Divider sx={{ marginTop: "5%" }} />
                        </Grid>
                        <Grid item xs={12}>
                          <Stack
                            direction="row"
                            justifyContent="space-between"
                            sx={{ paddingX: "3%" }}
                          >
                            <div className="course-price">Price</div>
                            <div className="course-date">₹200</div>
                          </Stack>
                          <Divider sx={{ marginTop: "5%" }} />
                        </Grid>
                        <Grid item xs={12}>
                          <Stack
                            direction="row"
                            justifyContent="space-between"
                            sx={{ paddingX: "3%" }}
                          >
                            <div className="course-price">Date Launched</div>
                            <div className="course-date">07 August 2021</div>
                          </Stack>
                          <Divider sx={{ marginTop: "5%" }} />
                        </Grid>
                      </Grid>
                    </Stack>
                  </div>
                </Grid>
                <Grid item xs={12} md={8}>
                  <div
                    className="right-side-profile"
                    style={{ background: "white" }}
                  >
                    <Stack>
                      <div
                        style={{
                          textAlign: "start",
                          color: "#666",
                          marginBottom: "0.5rem",
                        }}
                      >
                        <Typography>Course Name</Typography>
                      </div>
                      <div style={{ marginBottom: "1.2rem" }}>
                        <TextField onChange={(event) => {setTitle(event.target.value)}} value={title} fullWidth />
                      </div>
                      <div
                        style={{
                          textAlign: "start",
                          color: "#666",
                          marginBottom: "0.5rem",
                        }}
                      >
                        <Typography>About the Course</Typography>
                      </div>
                      <div style={{ marginBottom: "0.5rem" }}>
                        <Grid container>
                          <Grid item md={4}>
                            <Stack direction="row" alignItems="center">
                              <Checkbox onChange={(event)=> {setAbout(
                                [...about, "Includes Test Series"]
                              )}} />
                              <div style={{ fontSize: "0.75rem" }}>
                                Includes Test Series
                              </div>
                            </Stack>
                          </Grid>
                          <Grid item md={4}>
                            <Stack direction="row" alignItems="center">
                              <Checkbox onChange={(event)=> {setAbout(
                                [...about, "Pay in Installments Available"]
                              )}} />
                              <div style={{ fontSize: "0.75rem" }}>
                                Pay in Installments Available
                              </div>
                            </Stack>
                          </Grid>
                          <Grid item md={4}>
                            <Stack direction="row" alignItems="center">
                              <Checkbox onChange={(event)=> {setAbout(
                                [...about, "Includes Test Series"]
                              )}} />
                              <div style={{ fontSize: "0.75rem" }}>
                                Includes Test Series
                              </div>
                            </Stack>
                          </Grid>
                          <Grid item md={4}>
                            <Stack direction="row" alignItems="center">
                              <Checkbox onChange={(event)=> {setAbout(
                                [...about, "Validity:2 Years"]
                              )}} />
                              <div style={{ fontSize: "0.75rem" }}>
                                Validity:2 Years
                              </div>
                            </Stack>
                          </Grid>
                          <Grid item md={4}>
                            <Stack direction="row" alignItems="center">
                              <Checkbox onChange={(event)=> {setAbout(
                                [...about, "CSAT Included"]
                              )}} />
                              <div style={{ fontSize: "0.75rem" }}>
                                CSAT Included
                              </div>
                            </Stack>
                          </Grid>
                          <Grid item md={4}>
                            <Stack direction="row" alignItems="center">
                              <Checkbox onChange={(event)=> {setAbout(
                                [...about, "Includes Test Series"]
                              )}} />
                              <div style={{ fontSize: "0.75rem" }}>
                                Includes Test Series
                              </div>
                            </Stack>
                          </Grid>
                          <Grid item md={4}>
                            <Stack direction="row" alignItems="center">
                              <Checkbox onChange={(event)=> {setAbout(
                                [...about, "Weekly Live Classes"]
                              )}} />
                              <div style={{ fontSize: "0.75rem" }}>
                                Weekly Live Classes
                              </div>
                            </Stack>
                          </Grid>
                          <Grid item md={4}>
                            <Stack direction="row" alignItems="center">
                              <Checkbox onChange={(event)=> {setAbout(
                                [...about, "Current Affairs Included"]
                              )}} />
                              <div style={{ fontSize: "0.75rem" }}>
                                Current Affairs Included
                              </div>
                            </Stack>
                          </Grid>
                          {/* <Grid item md={4}>
                            <Stack direction="row" alignItems="center">
                              <Checkbox onChange={(event)=> {setAbout(
                                [...about, "Include Test Series"]
                              )}} />
                              <div style={{ fontSize: "0.75rem" }}>
                                Includes Test Series
                              </div>
                            </Stack>
                          </Grid> */}
                        </Grid>
                      </div>
                      <div
                        style={{
                          textAlign: "start",
                          color: "#666",
                          marginBottom: "0.5rem",
                        }}
                      >
                        <Grid container alignItems="center">
                          <Grid item md={6}>
                            <Stack direction="column">
                              <Typography>Product Code</Typography>
                              <TextField defaultValue="#1321" disabled />
                            </Stack>
                          </Grid>
                          <Grid item md={6} paddingLeft="1rem">
                            <Stack direction="row" alignItems="center" gap={2}>
                              <Stack direction="column">
                                <Typography>Start From</Typography>
                                <TextField />
                              </Stack>
                              <Stack direction="column">
                                <Typography>Validity</Typography>
                                <TextField onChange={(event) => {setValidity(event.target.value)}} />
                              </Stack>
                            </Stack>
                          </Grid>
                        </Grid>
                        <Grid container alignItems="center" marginTop="1rem">
                          <Grid item md={6}>
                            <Stack direction="row" alignItems="center" gap={2}>
                              <Stack direction="column">
                                <Typography>Sale Price</Typography>
                                <TextField onChange={(event) => {setMrp(event.target.value)}} value={mrp} />
                              </Stack>
                              <Stack direction="column">
                                <Typography>Discounted Price</Typography>
                                <TextField onChange={(event) => {setPrice(event.target.value)}} value={price} />
                              </Stack>
                            </Stack>
                            <Stack direction="row" alignItems="center" gap={2}>
                              <Stack
                                direction="column"
                                width="100%"
                                marginTop="2.5rem"
                              >
                                <Typography>Course Category</Typography>
                                {/* <TextField fullWidth /> */}
                                <Select
                                    id="select-edu"
                                    value={localcat}
                                    onChange={handleCatChange}
                                  >
                                      {cat?.map((category) => {
                                        return <MenuItem id={category.id} value={category.name}>{category.name}</MenuItem>
                                      })}
                                  </Select>
                              </Stack>
                            </Stack>
                            <Stack direction="row" alignItems="center" gap={2}>
                              <Stack
                                direction="column"
                                width="100%"
                                marginTop="2.5rem"
                              >
                                <Typography>Course Language</Typography>
                                <TextField fullWidth onChange={(event) => {setLanguage(event.target.value)}} value={language} />
                              </Stack>
                            </Stack>
                          </Grid>
                          <Grid item md={6} paddingLeft="1rem">
                            <Stack direction="column">
                              <Typography>Educators</Typography>
                              <div
                                style={{
                                  padding: "2.5%",
                                  border: "1px solid #DDD",
                                }}
                              >
                                <Stack>
                                  <div
                                    sx={{
                                      display: "flex",
                                      justifyContent: "center",
                                      flexWrap: "wrap",
                                      listStyle: "none",
                                      p: 0.5,
                                      m: 0,
                                    }}
                                    component="ul"
                                  >
                                    {chipData?.map((data) => {
                                      let icon;
                                      return (
                                        <ListItem key={data.key}>
                                          <Chip
                                            icon={icon}
                                            label={data}
                                            onDelete={handleDelete(data)}
                                            deleteIcon={
                                              <CancelIcon
                                                sx={{
                                                  color: "white !important",
                                                }}
                                              />
                                            }
                                            sx={{
                                              background: "#0373BA",
                                              color: "white",
                                            }}
                                          />
                                        </ListItem>
                                      );
                                    })}
                                  </div>
                                  <div style={{ marginBottom: "0.2rem" }}>
                                    Select Educator
                                  </div>
                                  <Select
                                    id="select-edu"
                                    value={edu}
                                    onChange={handleChange}
                                  >
                                      {data?.map((educator) => {
                                        return <MenuItem id={educator.id} value={educator.name}>{educator.name}</MenuItem>
                                      })}
                                  </Select>
                                </Stack>
                              </div>
                            </Stack>
                            <div
                              style={{ display: "flex", justifyContent: "end" }}
                            >
                              <Stack direction="row" gap={1} marginTop="4.5rem">
                                <Button variant="contained" onClick={handleSubmit}>Submit</Button>
                                <Button variant="outlined">Cancel</Button>
                              </Stack>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    </Stack>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Stack>
        </div>
      </div>
    </div>
  );
};
