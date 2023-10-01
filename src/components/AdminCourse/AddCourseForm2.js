import {
  Button,
  Stack,
  Grid,
  Divider,
  Typography,
  Paper,
  Box,
} from "@mui/material";

import { ReactComponent as ChapterLogo } from "../../assets/svg/admin/chapter.svg";
import { ReactComponent as DocumentLogo } from "../../assets/svg/admin/document.svg";
import { ReactComponent as ImageLogo } from "../../assets/svg/admin/image.svg";
import { ReactComponent as TestLogo } from "../../assets/svg/admin/test.svg";
import { ReactComponent as VideoLogo } from "../../assets/svg/admin/video.svg";
import { useState } from "react";

import EmptyChapterPlaceholder from "../../assets/png/empty-chapter.png";
import CreateChapterDialog from "./CreateChapterDialog";
import ChapterView from "./ChapterView";
import UploadVideoDialog from "./UploadVideoDialog";

import UploadTestDialog from "./UploadTestDialog";
import UploadDocumentDialog from "./UploadDocumentDialog";

function AddCourseForm2({ courseImage, courseName, chapters, onNameConfirm, addVideos, addTests, addNotes, onDelete }) {
  const [chapterSelected, setChapterSelected] = useState(null);
  const [showChapterNameDialog, setShowChapterNameDialog] = useState(false);
  const [showUploadVideoDialog, setShowUploadVideoDialog] = useState(false);
  const [showUploadTestDialog, setShowUploadTestDialog] = useState(false);
  const [showUploadNoteDialog, setShowUploadNoteDialog] = useState(false);

  function addName(name) {
    onNameConfirm(name)
    setShowChapterNameDialog(false);
  }

  function onAddVideos(videos) {
    addVideos(chapterSelected, videos)
  }

  function onAddTests(tests) {
    addTests(chapterSelected, tests)
  }

  function onAddNotes(notes) {
    addNotes(chapterSelected, notes)
  }

  function onChapterResourceDelete(chapterId, resourceId, event) {
    event.stopPropagation()
    console.log(chapterId, resourceId, chapterSelected)
    if (chapterSelected === chapterId && !resourceId) {
      setChapterSelected('')
    }
    onDelete(chapterId, resourceId)
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
                  sx={{
                    paddingY: "0.75rem",
                    marginX: "1rem",
                    justifyContent: "flex-start",
                    color: "black",
                    textTransform: "none",
                    borderBottom: '1px solid #ddd'
                  }}
                  onClick={setShowChapterNameDialog.bind(this, true)}
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
                  onClick={setShowUploadVideoDialog.bind(this, true)}
                  disabled={!chapterSelected}
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
                  onClick={setShowUploadTestDialog.bind(this, true)}
                  disabled={!chapterSelected}
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
                  onClick={setShowUploadNoteDialog.bind(this, true)}
                  disabled={!chapterSelected}
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
                  onClick={setShowUploadVideoDialog.bind(this, true)}
                  disabled={!chapterSelected}
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
                onClick={setShowChapterNameDialog.bind(this, true)}
              >
                Create Chapter
              </Button>
            </Stack>
            {chapters.length === 0 && (
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
              {chapters.map((chapter, index) => (
                <ChapterView
                  key={chapter.id}
                  chapterIdx={index}
                  chapter={chapter}
                  selected={chapter.id === chapterSelected}
                  onSelect={setChapterSelected.bind(this, chapter.id)}
                  onDelete={onChapterResourceDelete}
                />
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
      <CreateChapterDialog
        open={showChapterNameDialog}
        handleClose={setShowChapterNameDialog.bind(this, false)}
        handleNameConfirm={addName}
      />
      <UploadVideoDialog
        open={showUploadVideoDialog}
        handleClose={setShowUploadVideoDialog.bind(this, false)}
        handleVideosConfirm={onAddVideos}
      />
      <UploadTestDialog
        open={showUploadTestDialog}
        handleClose={setShowUploadTestDialog.bind(this, false)}
        handleTestsConfirm={onAddTests}
      />
      <UploadDocumentDialog
        open={showUploadNoteDialog}
        handleClose={setShowUploadNoteDialog.bind(this, false)}
        handleNotesConfirm={onAddNotes}
      />
    </>
  );
}

export default AddCourseForm2;
