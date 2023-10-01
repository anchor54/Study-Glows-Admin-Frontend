import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Button,
  Stack,
  Grid,
  Divider,
  Typography,
  Paper,
  Box,
  IconButton,
} from "@mui/material";

import { ReactComponent as ChapterLogo } from "../../assets/svg/admin/chapter.svg";
import { ReactComponent as DocumentLogo } from "../../assets/svg/admin/document.svg";
import { ReactComponent as ImageLogo } from "../../assets/svg/admin/image.svg";
import { ReactComponent as TestLogo } from "../../assets/svg/admin/test.svg";
import { ReactComponent as VideoLogo } from "../../assets/svg/admin/video.svg";
import { ReactComponent as DownArrow } from "../../assets/svg/admin/arrow_circle_down.svg";
import { ReactComponent as EditIcon } from "../../assets/svg/admin/edit.svg";
import { ReactComponent as DeleteIcon } from "../../assets/svg/admin/delete-icon.svg";

import EmptyChapterPlaceholder from "../../assets/png/empty-chapter.png";
import CreateFAQDialog from "./CreateFAQDialog";

export default function AddCourseForm3({ courseImage, courseName }) {
  const [faqs, setFAQs] = useState([]);
  const [showAddFAQDialog, setShowAddFAQDialog] = useState(false);
  const [faqSelected, setFAQSelected] = useState(null)

  function openFAQDialog(faq) {
    console.log(faq)
    setFAQSelected(faq)
    setShowAddFAQDialog(true)
  }

  function closeFAQDialog() {
    console.log("Setting faq selected to null")
    setFAQSelected(null)
    setShowAddFAQDialog(false)
  }

  function onFAQAdded(faqModel) {
    setFAQs((faqs) => {
      if (faqModel.id) {
        const newFAQs = [...faqs]
        const idx = newFAQs.findIndex(faq => faq.id === faqModel.id)
        if (idx !== -1) newFAQs[idx] = faqModel
        return newFAQs
      } else {
        return [
          ...faqs,
          { id: uuidv4(), ...faqModel }
        ]
      }
    });
  }

  function deleteFAQ(faqId) {
    setFAQs(faqs => faqs.filter(faq => faq.id !== faqId))
  }

  return (
    <>
      <Grid container justifyContent="space-between" alignItems="space-between">
        <Grid height="100%" item xs={12} md={4}>
          <div className="left-side-profile">
            <Stack
              direction="column"
              sx={{
                background: "#FFF",
                boxShadow: "4px 4px 20px 8px rgba(0, 0, 0, 0.08)",
                borderRadius: "5px",
              }}
            >
              <Grid className="profile-card" container justifyContent="center">
                <Grid item xs={12} justifyContent="center">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={
                        courseImage
                          ? URL.createObjectURL(courseImage)
                          : "/images/admin/addCourseImage.png"
                      }
                      height={200}
                      width={250}
                      style={{ objectFit: "contain" }}
                      alt="Course Thumbnail"
                    />
                  </div>
                </Grid>
                <span style={{ fontWeight: "bold", margin: "2rem 0" }}>
                  {courseName === "" ? courseName : "Name of the course"}
                </span>
              </Grid>
            </Stack>
            <Stack
              direction="column"
              alignItems="start"
              sx={{
                background: "#FFF",
                boxShadow: "4px 4px 20px 8px rgba(0, 0, 0, 0.08)",
                marginTop: "5%",
                paddingTop: "5%",
                borderRadius: "5px",
                flexGrow: "1"
              }}
            >
              <Typography fontWeight={700} marginLeft={2} marginBottom={3}>Add Content</Typography>
              <Box>
                <Button
                  startIcon={<ChapterLogo />}
                  disabled
                  sx={{
                    paddingY: "0.75rem",
                    marginX: "1rem",
                    justifyContent: "flex-start",
                    color: "black",
                    textTransform: "none",
                    borderBottom: '1px solid #ddd'
                  }}
                  fullWidth
                >
                  <Typography marginLeft={1}>Chapter</Typography>
                </Button>
                <Button
                  startIcon={<VideoLogo />}
                  sx={{
                    paddingY: "0.75rem",
                    marginX: "1rem",
                    justifyContent: "flex-start",
                    color: "black",
                    textTransform: "none",
                    borderBottom: '1px solid #ddd'
                  }}
                  disabled
                  fullWidth
                >
                  <Typography marginLeft={1}>Video</Typography>
                </Button>
                <Button
                  startIcon={<TestLogo />}
                  sx={{
                    paddingY: "0.75rem",
                    marginX: "1rem",
                    justifyContent: "flex-start",
                    color: "black",
                    textTransform: "none",
                    borderBottom: '1px solid #ddd'
                  }}
                  disabled
                  fullWidth
                >
                  <Typography marginLeft={1}>Subjective Test</Typography>
                </Button>
                <Button
                  startIcon={<DocumentLogo />}
                  sx={{
                    paddingY: "0.75rem",
                    marginX: "1rem",
                    justifyContent: "flex-start",
                    color: "black",
                    textTransform: "none",
                    borderBottom: '1px solid #ddd'
                  }}
                  disabled
                  fullWidth
                >
                  <Typography marginLeft={1}>Document</Typography>
                </Button>
                <Button
                  startIcon={<ImageLogo />}
                  sx={{
                    paddingY: "0.75rem",
                    marginX: "1rem",
                    justifyContent: "flex-start",
                    color: "black",
                    textTransform: "none",
                    borderBottom: '1px solid #ddd'
                  }}
                  disabled
                  fullWidth
                >
                  <Typography marginLeft={1}>Image</Typography>
                </Button>
              </Box>
            </Stack>
          </div>
        </Grid>
        <Grid container direction="column" height="100%" bgcolor="white" item xs={12} md={8} style={{ overflow: 'auto' }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white",
              height: "100%",
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              paddingY={1.5}
              paddingX={2.5}
            >
              <Typography>Course Content</Typography>
              <Button
                variant="outlined"
                onClick={openFAQDialog.bind(this, null)}
              >
                Add New FAQ
              </Button>
            </Stack>
            {faqs.length === 0 && (
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ width: "50%", height: "50%" }}>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    src={EmptyChapterPlaceholder}
                    alt="empty chapter placeholder"
                  />
                </Box>
              </Box>
            )}
            <Box
              display="flex"
              flexDirection="column"
              padding={2}
              flexGrow={1}
              gap={2}
            >
              {faqs.map((faq, index) => (
                <FAQItem
                  key={faq.id}
                  faqModel={faq}
                  onEditClicked={openFAQDialog.bind(this, faq)}
                  onDeleteClicked={deleteFAQ.bind(this, faq.id)}
                />
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
      <CreateFAQDialog
        open={showAddFAQDialog}
        faq={faqSelected}
        onFAQAdded={onFAQAdded}
        handleClose={closeFAQDialog}
      />
    </>
  );
}

function FAQItem({ faqModel, onEditClicked, onDeleteClicked }) {
  const [showAnswer, setShowAnswer] = useState(false)
  function toggleAnswerVisibility() {
    setShowAnswer(showAnswer => !showAnswer)
  }
  return (
    <Box display="flex" flexDirection="column"onClick={toggleAnswerVisibility} borderRadius={1} border="1px solid #ddd">
      <Stack direction="row" paddingX={2} paddingY={1} alignItems="center">
        <DownArrow/>
        <Typography marginLeft={2} noWrap fontWeight={700}>{faqModel.question}</Typography>
        <IconButton sx={{ marginLeft: 'auto', marginRight: '0.5rem' }} onClick={onEditClicked}><EditIcon/></IconButton>
        <IconButton onClick={onDeleteClicked}><DeleteIcon/></IconButton>
      </Stack>
      <Box paddingX={2} bgcolor="#ddd" display={!showAnswer ? "none" : "block"}>
        <Typography textAlign="start">{faqModel.answer}</Typography>
      </Box>
    </Box>
  )
}
