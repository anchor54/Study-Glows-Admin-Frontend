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
    Input,
    Radio,
    Stack,
    TextField,
    Typography,
  } from "@mui/material";
  import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
  import EditIcon from "@mui/icons-material/Edit";
  import AccessTimeIcon from "@mui/icons-material/AccessTime";
  import React, { useEffect, useState } from "react";
  import Divider from "../Tools/Divider";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
  import CloseIcon from "@mui/icons-material/Close";
  import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
  import publicAxios from "../../axios/publicAxios";
  import ArrowBackIcon from "@mui/icons-material/ArrowBack";
  import { Link, useNavigate } from "react-router-dom";
  
  export const Tests = (props) => {
    const [open, setOpen] = useState(false);
    const [openName, setOpenName] = useState(false);
    const [openMCQ, setOpenMCQ] = useState(false);
    const [openIQ, setOpenIQ] = useState(false);
    const [openCO, setOpenCO] = useState(false);
    const [openTF, setOpenTF] = useState(false);
    const [option1, setOption1] = useState();
    const [option2, setOption2] = useState();
    const [option3, setOption3] = useState();
    const [option4, setOption4] = useState();
    const [question, setQuestion] = useState();
    const [solution, setSolution] = useState();
    const [data, setData] = useState();
    const [testset, setTestset] = useState();
    const [fetchQuestion, setFetchQuestion] = useState();
    const [loading, setLoading] = useState();
    const [displayQuestion, setDisplayQuestion] = useState([]);
    const [shouldRunCode, setShouldRunCode] = useState(false);
    const [uploadedQuestion, setUploadedQuestion] = useState([]);
    const [testSeriesName, setTestSeriesName] = useState();
    const [publishTestSet, setPublishTestSet] = useState();
    const [testSetName, setTestSetName] = useState(["Section 1"]);

    
    console.log("ROW DATA: ", props.Rowdata.testset);
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

    const navigate = useNavigate();
    const handleClose = () => {
      setOpen(false);
    };
    const handleBack = () => {
      navigate(0);
    }
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
    const handleMCQSave = () => {
      setLoading(true);

      const request_body = {
        type: "MCQ",
        marks: "4",
        max_time: "30",
        difficulty: "medium",
        question: question,
        solution: solution,
      };
      publicAxios
        .post(`http://65.0.164.61/createquestion`, request_body)
        .then((res) => {
          console.log("POSTED QUESTION: ", res);
        })
        .catch((e) => {
          console.log(e);
        });
        setUploadedQuestion(uploadedQuestion => [...uploadedQuestion, question])
      const option1_body = {
        option: option1,
        correct_status: false,
        marks: 4 ,
        question: question
      }
      const option2_body = {
        option: option2,
        correct_status: false,
        marks: 4 ,
        question: question
      }
      const option3_body = {
        option: option3,
        correct_status: true,
        marks: 4 ,
        question: question
      }
      const option4_body = {
        option: option4,
        correct_status: false,
        marks: 4,
        question: question
      }

      publicAxios
        .post(`http://65.0.164.61/createoption`, option1_body)
        .then((res) => {
          console.log("POSTED Option: ", res);
        })
        .catch((e) => {
          console.log(e);
        });
      publicAxios
        .post(`http://65.0.164.61/createoption`, option2_body)
        .then((res) => {
          console.log("POSTED Option: ", res);
        })
        .catch((e) => {
          console.log(e);
        });
      publicAxios
        .post(`http://65.0.164.61/createoption`, option3_body)
        .then((res) => {
          console.log("POSTED Option: ", res);
        })
        .catch((e) => {
          console.log(e);
        });
      publicAxios
        .post(`http://65.0.164.61/createoption`, option4_body)
        .then((res) => {
          console.log("POSTED Option: ", res);
        })
        .catch((e) => {
          console.log(e);
        });
      handleClose();
      setLoading(false);
    };


    const handleTFSave = () => {

      const request_body = {
        type: "tf",
        marks: "2",
        max_time: "15",
        difficulty: "easy",
        question: question,
        solution: solution,
      };
      publicAxios
        .post(`http://65.0.164.61/createquestion`, request_body)
        .then((res) => {
          console.log("POSTED QUESTION: ", res);
        })
        .catch((e) => {
          console.log(e);
        });
        setUploadedQuestion(uploadedQuestion => [...uploadedQuestion, question])
      const option_body1 = { 
      option: "False", 
      "correct_status" : true, 
      "marks": 2,
      question: question
    }
      const option_body2 = { 
      option: "True", 
      "correct_status" : false, 
      "marks": 2,
      "question": question
    }
      publicAxios
        .post(`http://65.0.164.61/createoption`, option_body1)
        .then((res) => {
          console.log("POSTED Option: ", res);
        })
        .catch((e) => {
          console.log(e);
        });
      publicAxios
        .post(`http://65.0.164.61/createoption`, option_body2)
        .then((res) => {
          console.log("POSTED Option: ", res);
        })
        .catch((e) => {
          console.log(e);
        });
      
    };

    const getInfo = async () => {
      setLoading(true);
      await publicAxios
        // .get("http://65.0.164.61/testseries")
        .get("http://65.0.164.61/alltest")
        .then((res) => {
          console.log("Pokemon: ", res.data);
          if (res.status === 200) {
            setData(res.data);
            // setLoading(false);
          }
        })
        .catch((e) => {
          if (e.response && e.response.status === 404) {
            setData(true);
            // setLoading(false);
          }
          console.info("error", e);
        });
      await publicAxios
        .get("http://65.0.164.61/alltestsets")
        .then((set) => {
          console.log("Test Set: ", set.data);
          if (set.status === 200) {
            setTestset(set.data);
            // setLoading(false);
          }
        })
        .catch((e) => {
          if (e.response && e.response.status === 404) {
            setTestset(true);
            // setLoading(false);
          }
          console.info("error", e);
        });
      await publicAxios
        .get("http://65.0.164.61/allquestions")
        .then((quest) => {
          console.log("Fetch Questions : ", quest.data);
          if (quest.status === 200) {
            setFetchQuestion(quest.data);
            // setLoading(false);
          }
        })
        .catch((e) => {
          if (e.response && e.response.status === 404) {
            setFetchQuestion(true);
            // setLoading(false);
          }
          console.info("error", e);
        });
        console.log("DISPLAY INFO: ", displayQuestion);
      for (let index = 0; index < testset?.length; index++) {
        const element = testset[index];
        // console.log("TEST SETs: ", element);
        for (let j = 0; j < props.Rowdata.testset?.length; j++) {
          const pokemon = props.Rowdata.testset[j];
          if(element?.id === pokemon){
            console.log("KEY: ", element);
            for (let k = 0; k < element.questions?.length; k++) {
              const qn = element.questions[k];
              for (let qu = 0; qu < fetchQuestion?.length; qu++) {
                const questionTitle = fetchQuestion[qu];
                if(qn === questionTitle.id){
                  console.log("THE QUESTION: ", questionTitle.question);
                  setDisplayQuestion(displayQuestion => [...displayQuestion, questionTitle.question])
                }
                
              }
              console.log("QUESTIONS: ", qn);
              
            }
          }
        }
        
      }
    };

    const handleSubmit = async () => {

      const testset_body = {
        name: testSetName,
        language: "English",
        description: "Description",
        access_type: "free",
        duration: "60",
        type: "chapter",
        testset_category: ["UPSC"],
        order: 1,
        publish: true,
        questions: uploadedQuestion,
      }
        
      await publicAxios
      .post("http://65.0.164.61/createtestset", testset_body)
      .then((response)=> {
        console.log("CREATED TEST SET: ", response);
        // setTestSetName(testSetName => [...testSetName, testset]);
        // console.log("publishTestSet: ", publishTestSet);
      })
      .catch((error) => {
        console.info(error);
      })



      const req_body = {
        title: testSeriesName,
        about: "About Test Series",
        language: "English",
        price: 200,
        mrp: 2200,
        validity: "2023-12-31",
        publish: true,
        feature: ["Current Affairs, Supplementary Material & Reference Material will be provided in Soft Copies.","Expert Support Via Phone and Email Discussion"],
        feature2: ["Expert Feedback & Assessment"],
        category: ["General Awarness"],
        faq: ["Can I change my batch after buying subscription?"],
        testset: testSetName
      }
      publicAxios
      .post('http://65.0.164.61/createtestseries', req_body)
      .then((response) => {
        console.log("CREATE TEST SERIES: ", response)
      })
      .catch((e) => {
        console.info("error", e);
      });
      navigate(0);
    }
    useEffect(() => {
      console.log("UPLOADED QUESTIONS: ",uploadedQuestion);
      if (shouldRunCode) {
      // setLoading(true);
      getInfo();
      }
      // setLoading(false);
    }, [displayQuestion, shouldRunCode, uploadedQuestion]);
  
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
                {/* <Link to="/admin/test"> */}
                  <IconButton onClick={handleBack}>
                    <ArrowBackIcon sx={{ color: "black" }} />
                  </IconButton>
                {/* </Link> */}
                {props.Rowdata?.title ? (
                  <>{props.Rowdata?.title}</>
                ) : (
                  <>UPSC CSE PRELIMS FULL TEST PAPER 4</>
                )}
              </div>
              <div style={{ paddingRight: "0.7%" }}>
                <Button variant="contained" onClick={() => setOpenName(true)}>Submit</Button>
              </div>
            </Stack>
            <Dialog open={openName} onClose={handleClose}>
                <DialogTitle>Name of the Test Series</DialogTitle>
                <DialogContent>
                  <Input
                    type="text"
                    onChange={(event) => {
                      setTestSeriesName(event.target.value)
                    }}
                    value={testSeriesName}
                    fullWidth
                    placeholder="Enter Name of the Test Series"
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleSubmit} variant="contained">
                    Submit
                  </Button>
                  <Button onClick={() => setOpenName(false)} variant="contained">
                    Cancel
                  </Button>
                </DialogActions>
              </Dialog>
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
                            <Typography>Section 2-0 Questions</Typography>
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
                          <Button variant="contained" onClick={() => {handleClickOpen(); setTestSetName(["Section 2-0"])}}>
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
                            <Typography>Section 3-0 Questions</Typography>
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
                          {loading? (
                            <>
                            {displayQuestion?.map((elem) => {return (
                              <>{elem} <br /></>
                            )})}
                            </>
                          ):(<>Loading</>)}
                      <Button variant="contained" onClick={() => {handleClickOpen(); setTestSetName(["Section 3-0"])}}>
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
                  <Button variant="contained" onClick={handleMCQSave}>Save</Button>
                  <Button variant="contained">Next</Button>
                </Stack>
                <div>
                  <IconButton aria-label="Example" onClick={handleCloseCQ}>
                    <CloseIcon />
                  </IconButton>
                </div>
              </Stack>
            </Stack>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>Question</DialogContentText>
            {/* <div
              style={{
                fontFamily: "Lato",
                border: "1px solid #666",
                padding: "1%",
                borderRadius: "0.3125rem",
                marginTop: "1%",
              }}
            > */}
              <TextField fullWidth placeholder="This is MCQ Type Question" onChange={(event)=> {setQuestion(event.target.value)}} value={question} 
              sx={{
                fontFamily: "Lato",
                // border: "1px solid #666",
                padding: "1%",
                borderRadius: "0.3125rem",
                marginTop: "1%",
              }}
              
              />
            {/* </div> */}
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
                  <TextField fullWidth label="Option 1" onChange={(event)=> {setOption1(event.target.value)}} value={option1} />
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
                  <TextField fullWidth label="Option 2" onChange={(event)=> {setOption2(event.target.value)}} value={option2} />
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
                  <TextField fullWidth label="Option 3" onChange={(event)=> {setOption3(event.target.value)}} value={option3} />
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
                  />
                </div>
                <div style={{ width: "100%" }}>
                  <TextField fullWidth label="Option 4" onChange={(event)=> {setOption4(event.target.value)}} value={option4} />
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
                onChange={(event) => {setSolution(event.target.value)}}
                value={solution}
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
                  <Button variant="contained" onClick={handleTFSave}>Save</Button>
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
            <TextField fullWidth placeholder="This is a true false question" onChange={(event)=> {setQuestion(event.target.value)}} value={question}
            sx={{
                fontFamily: "Lato",
                padding: "1%",
                borderRadius: "0.3125rem",
                marginTop: "1%",
            }} />
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
                    inputProps={{ "aria-label": "true" }} 
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
                    inputProps={{ "aria-label": "false" }}
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
                onChange={(event) => {setSolution(event.target.value)}}
                value={solution}
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
  