import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Divider,
  Typography,
  Modal,
  Box,
} from "@mui/material";
import { useState } from "react";

export default function CreateChapterDialog({
  open,
  handleClose,
  handleNameConfirm,
}) {
  const [name, setName] = useState("");
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
        width="60%"
        padding={2}
        marginX="auto"
      >
        <Typography fontWeight={700} fontSize="1.25rem">
          Create a Chapter
        </Typography>
        <Divider sx={{ margin: "1rem 0" }} />
        <Typography fontSize="1rem">Chapter Name</Typography>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />
        <Box
          display="flex"
          gap={2}
          marginLeft="auto"
          marginTop={2}
          width="max-content"
        >
          <Button
            onClick={handleNameConfirm.bind(this, name)}
            variant="contained"
          >
            Confirm
          </Button>
          <Button
            onClick={handleClose}
            variant="contained"
            sx={{ backgroundColor: "#e5e5e5", color: "black" }}
          >
            Back
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
