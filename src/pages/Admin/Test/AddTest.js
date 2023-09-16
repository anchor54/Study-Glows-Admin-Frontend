import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Radio,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import EditIcon from "@mui/icons-material/Edit";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import React, { useEffect, useState } from "react";
import Divider from "../../../components/Tools/Divider";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import publicAxios from "../../../axios/publicAxios";

export const AddTest = (props) => {
  const [open, setOpen] = useState(false);
  const [openMCQ, setOpenMCQ] = useState(false);
  const [openIQ, setOpenIQ] = useState(false);
  const [openCO, setOpenCO] = useState(false);
  const [openTF, setOpenTF] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleOpenMCQ = () => {
    setOpen(false);
    setOpenMCQ(true);
  };
  const handleOpenIQ = () => {
    setOpen(false);
    setOpenIQ(true);
  };
  const handleOpenCO = () => {
    setOpen(false);
    setOpenCO(true);
  };
  const handleOpenTF = () => {
    setOpen(false);
    setOpenTF(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseCQ = () => {
    setOpenMCQ(false);
  };
  const handleCloseIQ = () => {
    setOpenIQ(false);
  };
  const handleCloseCO = () => {
    setOpenCO(false);
  };
  const handleCloseTF = () => {
    setOpenTF(false);
  };

  // const newTest = () => {
  //   const request_body = { title: title, about: about.toString(), mrp: mrp, price: price, language: language};
  //   publicAxios
  //     .post(`http://65.0.164.61/postcourse`, request_body)
  //     .then((res) => {
  //       console.log("POSTED DATA ",res);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  useEffect(() => {
    console.log("THIS LINE WORKED");
  }, [])
  

  return (
    <div
      style={{
        background: "#F5F5F5",
        width: "100%",
        height: "100%",
        fontFamily: "Lato",
      }}
    >
      <div className="testnav" style={{ background: "white" }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              padding: "0.7%",
            }}
          >
            <Link to="/admin/test">
              <IconButton>
                <ArrowBackIcon sx={{ color: "black" }} />
              </IconButton>
            </Link>
            {props.name ? (
              <>{props.name}</>
            ) : (
              <>UPSC CSE PRELIMS FULL TEST PAPER 4</>
            )}
          </div>
          <div style={{ paddingRight: "0.7%" }}>
            <Button variant="contained">Submit</Button>
          </div>
        </Stack>
      </div>
      <Grid container justifyContent="space-between">
        <Grid item xs={12} md={4}>
          <div style={{ padding: "5%" }}>
            <Accordion sx={{ marginTop: "5%", boxShadow: "none" }}>
              <AccordionSummary
                expandIcon={<ArrowForwardIosSharpIcon fontSize="10px" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <b>Create Question</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <>
                  Multiple Choice Questions
                  <Divider />
                </>
                <>
                  True/False Questions
                  <Divider />
                </>
                <>
                  Comprehension Questions
                  <Divider />
                </>
                <>
                  Fill In The Blanks Questions
                  <Divider />
                </>
                <>
                  Integer Type Questions
                  <Divider />
                </>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ marginTop: "5%", boxShadow: "none" }}>
              <AccordionSummary
                expandIcon={<ArrowForwardIosSharpIcon fontSize="10px" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <b>Grading</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <>
                  Multiple Choice Questions
                  <Divider />
                </>
                <>
                  True/False Questions
                  <Divider />
                </>
                <>
                  Comprehension Questions
                  <Divider />
                </>
                <>
                  Fill In The Blanks Questions
                  <Divider />
                </>
                <>
                  Integer Type Questions
                  <Divider />
                </>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ marginTop: "5%", boxShadow: "none" }}>
              <AccordionSummary
                expandIcon={<ArrowForwardIosSharpIcon fontSize="10px" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <b>Test Sections</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button variant="contained">Add New Section</Button>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ marginTop: "5%", boxShadow: "none" }}>
              <AccordionSummary
                expandIcon={<ArrowForwardIosSharpIcon fontSize="10px" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <b>Test Settings</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stack direction="column">
                  <div>
                    <TextField
                      label="Order of Questions"
                      defaultValue="Quantitative Aptitude"
                      fullWidth
                    />
                  </div>
                  <Divider />
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Stack direction="column">
                      <div>
                        <Typography>Enable Solutions</Typography>
                      </div>
                      <div>
                        <Typography variant="caption">
                          Allow Students to view solutions
                        </Typography>
                      </div>
                    </Stack>
                    <div>
                      <Checkbox />
                    </div>
                  </Stack>
                  <Divider />
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Stack direction="column">
                      <div>
                        <Typography>Allow Section Switching</Typography>
                      </div>
                      <div>
                        <Typography variant="caption">
                          Student can switch sections during the course of the
                          test when you create more than one section.
                        </Typography>
                      </div>
                    </Stack>
                    <div>
                      <Checkbox />
                    </div>
                  </Stack>
                </Stack>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ marginTop: "5%", boxShadow: "none" }}>
              <AccordionSummary
                expandIcon={<ArrowForwardIosSharpIcon fontSize="10px" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <b>Import Questions</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stack
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  gap={1}
                >
                  <div>
                    <Button variant="outlined">
                      From My Library{" "}
                      <ArrowForwardIosSharpIcon sx={{ fontSize: "small" }} />
                    </Button>
                  </div>
                  OR
                  <div>
                    <Button variant="outlined">Upload Word File</Button>
                  </div>
                </Stack>
              </AccordionDetails>
            </Accordion>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          border="1px solid #DDD"
          sx={{ background: "white", height: "100vh" }}
        >
          <Stack>
            <div style={{ padding: "1%" }}>
              <Stack direction="row" alignItems="center">
                <div>
                  <Typography width={100} fontWeight="700">
                    Test Details
                  </Typography>
                </div>
                <div>
                  <EditIcon />
                </div>
              </Stack>
              <Stack direction="row">
                <div>
                  <AccessTimeIcon sx={{ fontSize: "1rem", color: "#666" }} />
                </div>
                <div style={{ width: "100%" }}>
                  <Typography fontSize="0.8rem" color="#666">
                    Test Duration: 2 hrs
                  </Typography>
                </div>
              </Stack>
              <Stack
                sx={{
                  marginTop: "2%",
                  listStylePosition: "inside",
                  padding: "2.5%",
                  border: "1px solid #DDD",
                  borderRadius: "0.3125rem",
                }}
              >
                <div>
                  <ol>
                    <li>
                      The test consists of 100 questions, each question has four
                      options out of which only one option will be correct.
                    </li>
                    <li>3 marks will be awarded for every right answer.</li>
                    <li>1 mark will be deducted for every wrong answer.</li>
                    <li>
                      No marks will be awarded or dedcuted for un-answered
                      questions.
                    </li>
                  </ol>
                </div>
              </Stack>
              <Stack
                sx={{
                  marginTop: "2%",
                  listStylePosition: "inside",
                  border: "1px solid #DDD",
                  borderRadius: "0.3125rem",
                }}
              >
                {/* <div style={{ padding: "2.5%" }}> */}
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Stack direction="row" justifyContent="space-between">
                      <Stack direction="column">
                        <div>
                          <Typography>Section 1-0 Questions</Typography>
                        </div>
                        <div>
                          <Typography fontSize="0.7rem" sx={{ color: "#666" }}>
                            Max. Section Marks: 4.00
                          </Typography>
                        </div>
                      </Stack>
                      <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        gap={1}
                      >
                        <div>
                          <EditIcon
                            sx={{ fontSize: "0.9rem", color: "#0373BA" }}
                          />
                        </div>
                        <div>
                          <Typography sx={{ color: "#0373BA" }}>
                            Edit Details
                          </Typography>
                        </div>
                      </Stack>
                    </Stack>
                  </AccordionSummary>
                  <AccordionDetails>
                    {/* </div> */}
                    <hr />
                    <Stack
                      direction="column"
                      gap={3}
                      alignItems="center"
                      justifyContent="center"
                      sx={{ height: "50vh" }}
                    >
                      <div>
                        <b>Let's add questions</b>
                      </div>
                      <div style={{ width: "50ch", textAlign: "center" }}>
                        You can use the <b>'Create Questions'</b> button or{" "}
                        <b>'Create Questions'</b> panel on left to add questions
                        to a section.
                      </div>
                      <div>
                        <Button variant="contained" onClick={handleClickOpen}>
                          Create Questions
                        </Button>
                      </div>
                    </Stack>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Stack direction="row" justifyContent="space-between">
                      <Stack direction="column">
                        <div>
                          <Typography>Section 1-0 Questions</Typography>
                        </div>
                        <div>
                          <Typography fontSize="0.7rem" sx={{ color: "#666" }}>
                            Max. Section Marks: 4.00
                          </Typography>
                        </div>
                      </Stack>
                      <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        gap={1}
                      >
                        <div>
                          <EditIcon
                            sx={{ fontSize: "0.9rem", color: "#0373BA" }}
                          />
                        </div>
                        <div>
                          <Typography sx={{ color: "#0373BA" }}>
                            Edit Details
                          </Typography>
                        </div>
                      </Stack>
                    </Stack>
                  </AccordionSummary>
                  <AccordionDetails>
                    {/* </div> */}
                    <hr />
                    <Stack
                      direction="column"
                      gap={3}
                      alignItems="center"
                      justifyContent="center"
                      sx={{ height: "50vh" }}
                    >
                      <div>
                        <b>Let's add questions</b>
                      </div>
                      <div style={{ width: "50ch", textAlign: "center" }}>
                        You can use the <b>'Create Questions'</b> button or{" "}
                        <b>'Create Questions'</b> panel on left to add questions
                        to a section.
                      </div>
                      <div>
                        <Button variant="contained" onClick={handleClickOpen}>
                          Create Questions
                        </Button>
                      </div>
                    </Stack>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Stack direction="row" justifyContent="space-between">
                      <Stack direction="column">
                        <div>
                          <Typography>Section 1-0 Questions</Typography>
                        </div>
                        <div>
                          <Typography fontSize="0.7rem" sx={{ color: "#666" }}>
                            Max. Section Marks: 4.00
                          </Typography>
                        </div>
                      </Stack>
                      <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        gap={1}
                      >
                        <div>
                          <EditIcon
                            sx={{ fontSize: "0.9rem", color: "#0373BA" }}
                          />
                        </div>
                        <div>
                          <Typography sx={{ color: "#0373BA" }}>
                            Edit Details
                          </Typography>
                        </div>
                      </Stack>
                    </Stack>
                  </AccordionSummary>
                  <AccordionDetails>
                    {/* </div> */}
                    <hr />
                    <Stack
                      direction="column"
                      gap={3}
                      alignItems="center"
                      justifyContent="center"
                      sx={{ height: "50vh" }}
                    >
                      <div>
                        <b>Let's add questions</b>
                      </div>
                      <div style={{ width: "50ch", textAlign: "center" }}>
                        You can use the <b>'Create Questions'</b> button or{" "}
                        <b>'Create Questions'</b> panel on left to add questions
                        to a section.
                      </div>
                      <div>
                        <Button variant="contained" onClick={handleClickOpen}>
                          Create Questions
                        </Button>
                      </div>
                    </Stack>
                  </AccordionDetails>
                </Accordion>
              </Stack>
            </div>
          </Stack>
        </Grid>
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Question</DialogTitle>
        <DialogContent>
          <DialogContentText>Choose the type of question:</DialogContentText>
          <ul style={{ listStyle: "none" }}>
            <li style={{ margin: "2%" }}>
              <Button onClick={handleOpenMCQ} variant="outlined">
                Multiple Choice Questions
              </Button>
            </li>
            <li style={{ margin: "2%" }}>
              <Button variant="outlined" onClick={handleOpenTF}>
                True/False Questions
              </Button>
            </li>
            <li style={{ margin: "2%" }}>
              <Button variant="outlined" onClick={handleOpenCO}>
                Comprehension Questions
              </Button>
            </li>
            <li style={{ margin: "2%" }}>
              <Button variant="outlined">Fill In The Blanks Questions</Button>
            </li>
            <li style={{ margin: "2%" }}>
              <Button variant="outlined" onClick={handleOpenIQ}>
                Integer Type Questions
              </Button>
            </li>
          </ul>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        fullWidth={true}
        maxWidth="md"
        open={openMCQ}
        onClose={handleCloseCQ}
      >
        <DialogTitle>
          <Stack direction="row" justifyContent="space-between">
            <div>
              <b>1. Multiple Choice</b>{" "}
              <span
                style={{
                  fontSize: "1rem",
                  background: "#AAEEC8",
                  padding: "0.2rem",
                  color: "#156C3C",
                }}
              >
                +4
              </span>
            </div>
            <Stack direction="row" alignItems="center">
              <Stack direction="row" gap={1}>
                <Button variant="contained">Previous</Button>
                <Button variant="contained">Save</Button>
                <Button variant="contained">Next</Button>
              </Stack>
              <div>
                <IconButton aria-label="Example">
                  <CloseIcon />
                </IconButton>
              </div>
            </Stack>
          </Stack>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Question</DialogContentText>
          <div
            style={{
              fontFamily: "Lato",
              border: "1px solid #666",
              padding: "1%",
              borderRadius: "0.3125rem",
              marginTop: "1%",
            }}
          >
            This is an MCQ question
          </div>
          <DialogContentText marginTop="1.5rem" marginBottom="1.5rem">
            Answers
          </DialogContentText>
          <Stack direction="column" gap={2}>
            <Stack direction="row" alignItems="center">
              <div>
                <Radio
                  // checked={selectedValue === 'a'}
                  // onChange={handleChange}
                  value="a"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </div>
              <div style={{ width: "100%" }}>
                <TextField fullWidth label="Option 1" />
              </div>
              <div>
                <Button
                  variant="text"
                  sx={{ color: "black" }}
                  startIcon={<DeleteOutlineIcon />}
                >
                  Delete
                </Button>
              </div>
            </Stack>
            <Stack direction="row" alignItems="center">
              <div>
                <Radio
                  // checked={selectedValue === 'a'}
                  // onChange={handleChange}
                  value="a"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </div>
              <div style={{ width: "100%" }}>
                <TextField fullWidth label="Option 2" />
              </div>
              <div>
                <Button
                  variant="text"
                  sx={{ color: "black" }}
                  startIcon={<DeleteOutlineIcon />}
                >
                  Delete
                </Button>
              </div>
            </Stack>
            <Stack direction="row" alignItems="center">
              <div>
                <Radio
                  // checked={selectedValue === 'a'}
                  // onChange={handleChange}
                  value="a"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </div>
              <div style={{ width: "100%" }}>
                <TextField fullWidth label="Option 3" />
              </div>
              <div>
                <Button
                  variant="text"
                  sx={{ color: "black" }}
                  startIcon={<DeleteOutlineIcon />}
                >
                  Delete
                </Button>
              </div>
            </Stack>
            <Stack direction="row" alignItems="center">
              <div>
                <Radio
                  // checked={selectedValue === 'a'}
                  // onChange={handleChange}
                  value="a"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </div>
              <div style={{ width: "100%" }}>
                <TextField fullWidth label="Option 4" />
              </div>
              <div>
                <Button
                  variant="text"
                  sx={{ color: "black" }}
                  startIcon={<DeleteOutlineIcon />}
                >
                  Delete
                </Button>
              </div>
            </Stack>
          </Stack>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "2%",
            }}
          >
            <Button variant="contained">Add a new option</Button>
          </div>
          <Stack direction="column">
            <DialogContentText>Solution</DialogContentText>
            <TextField
              fullWidth
              label="Enter detailed solution for your students"
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCQ} variant="contained">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        fullWidth={true}
        maxWidth="md"
        open={openIQ}
        onClose={handleCloseIQ}
      >
        <DialogTitle>
          <Stack direction="row" justifyContent="space-between">
            <div>
              <b>2. Integer Type</b>{" "}
              <span
                style={{
                  fontSize: "1rem",
                  background: "#AAEEC8",
                  padding: "0.2rem",
                  color: "#156C3C",
                }}
              >
                +4
              </span>
            </div>
            <Stack direction="row" alignItems="center">
              <Stack direction="row" gap={1}>
                <Button variant="contained">Previous</Button>
                <Button variant="contained">Save</Button>
                <Button variant="contained">Next</Button>
              </Stack>
              <div>
                <IconButton aria-label="Example">
                  <CloseIcon />
                </IconButton>
              </div>
            </Stack>
          </Stack>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Question</DialogContentText>
          <div
            style={{
              fontFamily: "Lato",
              border: "1px solid #666",
              padding: "1%",
              borderRadius: "0.3125rem",
              marginTop: "1%",
            }}
          >
            This is an Integer type question
          </div>
          <DialogContentText marginTop="1.5rem">Answers</DialogContentText>
          <TextField
            fullWidth
            label="Enter detailed solution for your students"
          />

          <Stack direction="column" marginTop="2%">
            <DialogContentText>Solution</DialogContentText>
            <TextField
              fullWidth
              label="Enter detailed solution for your students"
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseIQ} variant="contained">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        fullWidth={true}
        maxWidth="md"
        open={openCO}
        onClose={handleCloseCO}
      >
        <DialogTitle>
          <Stack direction="row" justifyContent="space-between">
            <div>
              <b>3. Comprehension</b>{" "}
              <span
                style={{
                  fontSize: "1rem",
                  background: "#AAEEC8",
                  padding: "0.2rem",
                  color: "#156C3C",
                }}
              >
                +4
              </span>
            </div>
            <Stack direction="row" alignItems="center">
              <Stack direction="row" gap={1}>
                <Button variant="contained">Previous</Button>
                <Button variant="contained">Save</Button>
                <Button variant="contained">Next</Button>
              </Stack>
              <div>
                <IconButton aria-label="Example">
                  <CloseIcon />
                </IconButton>
              </div>
            </Stack>
          </Stack>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Question</DialogContentText>
          <div
            style={{
              fontFamily: "Lato",
              border: "1px solid #666",
              padding: "1%",
              borderRadius: "0.3125rem",
              marginTop: "1%",
            }}
          >
            This is an Integer type question
          </div>
          <DialogContentText marginTop="1.5rem">Paragraph</DialogContentText>
          <TextField
            fullWidth
            label="This is a dummy paragraph. Click options below to start adding questions here."
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCO} variant="contained">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        fullWidth={true}
        maxWidth="md"
        open={openTF}
        onClose={handleCloseTF}
      >
        <DialogTitle>
          <Stack direction="row" justifyContent="space-between">
            <div>
              <b>4. True False</b>{" "}
              <span
                style={{
                  fontSize: "1rem",
                  background: "#AAEEC8",
                  padding: "0.2rem",
                  color: "#156C3C",
                }}
              >
                +4
              </span>
            </div>
            <Stack direction="row" alignItems="center">
              <Stack direction="row" gap={1}>
                <Button variant="contained">Previous</Button>
                <Button variant="contained">Save</Button>
                <Button variant="contained">Next</Button>
              </Stack>
              <div>
                <IconButton aria-label="Example">
                  <CloseIcon />
                </IconButton>
              </div>
            </Stack>
          </Stack>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Question</DialogContentText>
          <div
            style={{
              fontFamily: "Lato",
              border: "1px solid #666",
              padding: "1%",
              borderRadius: "0.3125rem",
              marginTop: "1%",
            }}
          >
            This is a true false question
          </div>
          <DialogContentText marginTop="1.5rem" marginBottom="1.5rem">
            Answers
          </DialogContentText>
          <Stack direction="column" gap={2}>
            <Stack direction="row" alignItems="center">
              <div>
                <Radio
                  // checked={selectedValue === 'a'}
                  // onChange={handleChange}
                  value="a"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </div>
              <div style={{ width: "100%" }}>
                <TextField fullWidth label="True" />
              </div>
            </Stack>
            <Stack direction="row" alignItems="center">
              <div>
                <Radio
                  // checked={selectedValue === 'a'}
                  // onChange={handleChange}
                  value="a"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </div>
              <div style={{ width: "100%" }}>
                <TextField fullWidth label="False" />
              </div>
            </Stack>
          </Stack>
          <Stack direction="column" marginTop="2rem">
            <DialogContentText>Solution</DialogContentText>
            <TextField
              fullWidth
              label="Enter detailed solution for your students"
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseTF} variant="contained">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
