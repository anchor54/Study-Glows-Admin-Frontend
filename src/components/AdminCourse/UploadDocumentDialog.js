import {
  Box,
  Button,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";

import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'
import { ReactComponent as DeleteIcon } from "../../assets/svg/admin/trash-can-solid.svg";
import { ReactComponent as UploadIcon } from "../../assets/svg/admin/cloud_upload.svg";

export default function UploadDocumentDialog({
  open,
  handleClose,
  handleNotesConfirm,
}) {
  const [notes, setNotes] = useState([]);

  function onClose() {
    handleNotesConfirm(notes)
    setNotes([])
    handleClose()
  }

  function setFileInfo({ target: { files } }) {
    let newFiles = []
    for (let i = 0; i < files.length; i++) {
      files[i].id = uuidv4()
      newFiles.push(files[i])
    }
    setNotes(notes => [...notes, ...newFiles])
  }

  function handleNoteDelete(noteId) {
    setNotes((notes) => notes.filter((note) => note.id !== noteId));
  }

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
          <Typography fontWeight={700}>Add Document</Typography>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center" paddingY={3}>
          <Button
            component="label"
            startIcon={<UploadIcon />}
            variant="contained"
            disableElevation={true}
            sx={{
              fontWeight: "500",
              backgroundColor: "#0052CC",
              textTransform: "none",
            }}
          >
            Upload from your PC
            <input type="file" hidden multiple onChange={setFileInfo} />
          </Button>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          paddingY={2}
        >
          <Grid container sm={12} gap={2}>
            <Grid item sm={12} direction="column">
              <Typography fontWeight={700}>Document Name</Typography>
              <TextField fullWidth placeholder="Enter Name" type="text"/>
            </Grid>
            <Grid item sm={12} direction="column">
              <Typography fontWeight={700}>Description</Typography>
              <TextField fullWidth placeholder="Description goes here" type="text"/>
            </Grid>
          </Grid>
        </Box>
        <Box marginBottom={2} sx={{ overflow: "auto" }} display="flex" flexDirection="column" gap={1}>
          {notes.map((note) => (
            <NoteItem
              key={note.id}
              noteFile={note}
              onDelete={handleNoteDelete.bind(this, note.id)}
            />
          ))}
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
            disabled={notes.length === 0}
            onClick={onClose}
          >
            Create
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

function NoteItem({ noteFile, onDelete }) {
  return (
    <Grid
      container
      sm={12}
      padding={2}
      alignItems="center"
      direction="row"
      sx={{ backgroundColor: '#ddd' }}
    >
      <Grid item sm={10} marginX={3}>
        <Typography fontWeight={700} color="#0373BA">{noteFile.name}</Typography>
      </Grid>
      <Grid item sm={1} marginLeft="auto">
        <Button
          aria-label="delete"
          sx={{ minWidth: "0", backgroundColor: "#C42730" }}
          onClick={onDelete}
        >
          <DeleteIcon />
        </Button>
      </Grid>
    </Grid>
  );
}
