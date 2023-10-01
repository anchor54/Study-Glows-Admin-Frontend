import { useState } from "react";
import { Modal, Box, Button, Typography, Grid, TextField } from "@mui/material";
import { useEffect } from "react";


export default function CreateFAQDialog({ open, faq, onFAQAdded, handleClose }) {
  const [question, setQuestion] = useState(!!faq ? faq.question : '')
  const [answer, setAnswer] = useState(!!faq ? faq.answer : '')
  const isEdit = !!faq
  function onClose() {
    onFAQAdded({ question, answer })
    setQuestion('')
    setAnswer('')
    handleClose()
  }

  useEffect(() => {
    setQuestion(faq?.question ?? "")
    setAnswer(faq?.answer ?? '')
  }, [faq])

  console.log("FAQ received", faq)
  return (
    <Modal
      open={open}
      onClose={handleClose}
      top="50%"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        borderRadius={2}
        bgcolor="white"
        width="80%"
        padding={2}
        margin="auto"
      >
        <Box paddingX={1} paddingY={1.25} borderBottom={1} borderColor="#ddd">
          <Typography fontWeight={700}>{isEdit ? "Edit" : "Add"} FAQ</Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          paddingY={2}
          gap={4}
        >
          <Grid container sm={12} direction="column">
            <Typography fontWeight={700} marginBottom={1}>Question</Typography>
            <TextField fullWidth type="text" value={question} onChange={event => setQuestion(event.target.value)} />
          </Grid>
          <Grid container sm={12} direction="column">
            <Typography fontWeight={700} marginBottom={1}>Answer</Typography>
            <TextField fullWidth type="text" value={answer} multiline onChange={event => setAnswer(event.target.value)}/>
          </Grid>
        </Box>
        <Box
          paddingX={1}
          paddingY={1.25}
          marginLeft="auto"
          borderTop={1}
          display="flex"
          gap={2}
          borderColor="#ddd"
          justifyContent="end"
        >
          <Button sx={{ color: "black" }} onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="contained"
            disableElevation={true}
            disabled={!question || question.length === 0 || !answer || answer.length === 0}
            onClick={onClose}
          >
            {isEdit ? "Edit" : "Create"}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
