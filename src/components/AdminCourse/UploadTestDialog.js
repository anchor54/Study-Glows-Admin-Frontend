import {
  Box,
  Button,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid" 
import { ReactComponent as DeleteIcon } from "../../assets/svg/admin/trash-can-solid.svg";
import { ReactComponent as AddCirdleIcon } from "../../assets/svg/admin/add_circle.svg"

export default function UploadTestDialog({
  open,
  handleClose,
  handleTestsConfirm,
}) {
  const [tests, setTests] = useState([]);

  function onClose() {
    handleTestsConfirm(tests)
    setTests([])
    handleClose()
  }

  function setFileInfo({ target: { files } }) {
    let newFiles = []
    for (let i = 0; i < files.length; i++) {
      files[i].id = uuidv4()
      newFiles.push(files[i])
    }
    setTests(tests => [...tests, ...newFiles])
  }

  function handleTestDelete(testId) {
    setTests((tests) => tests.filter((test) => test.id !== testId));
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
          <Typography fontWeight={700}>Create New Subjective Test</Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          paddingY={2}
        >
          <Grid container sm={12} gap={2}>
            <Grid item sm={7} direction="column">
              <Typography fontWeight={700}>Test Name</Typography>
              <TextField fullWidth placeholder="Enter Name" type="text"/>
            </Grid>
            <Grid item sm={4} direction="column">
              <Typography fontWeight={700}>Total Marks</Typography>
              <TextField fullWidth placeholder="Enter Total Marks" type="text"/>
            </Grid>
          </Grid>
          <Grid container sm={12} direction="column">
            <Typography fontWeight={700}>Question Paper - 0 File(s)</Typography>
            <Button component="label" variant="outlined" fullWidth startIcon={<AddCirdleIcon/>}>
              Add Files
              <input hidden type="file" multiple onChange={setFileInfo}/>
            </Button>
              <Typography textAlign="center" width="60%" marginX="auto" fontSize="0.75rem" color="#00000099">
              Add images or PDFs containing subjective questions. You can attach upto 10 files. Maximum file size that can be attached is 40 MB
            </Typography>
          </Grid>
        </Box>
        <Box marginBottom={2} sx={{ overflow: "auto" }} display="flex" flexDirection="column" gap={1}>
          {tests.map((test) => (
            <TestItem
              key={test.id}
              testFile={test}
              onDelete={handleTestDelete.bind(this, test.id)}
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
            disabled={tests.length === 0}
            onClick={onClose}
          >
            Create
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

function TestItem({ testFile, onDelete }) {
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
        <Typography fontWeight={700} color="#0373BA">{testFile.name}</Typography>
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
