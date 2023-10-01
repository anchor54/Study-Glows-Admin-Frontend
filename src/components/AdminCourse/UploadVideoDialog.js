import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";

import { ReactComponent as UploadIcon } from "../../assets/svg/admin/cloud_upload.svg";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { getFormattedTime } from "../../utils";
import { ReactComponent as DeleteIcon } from "../../assets/svg/admin/trash-can-solid.svg";

export default function UploadVideoDialog({
  open,
  handleClose,
  handleVideosConfirm,
}) {
  const [videos, setVideos] = useState([]);

  function onClose() {
    handleVideosConfirm(videos)
    setVideos([])
    handleClose()
  }

  function setFileInfo({ target: { files } }) {
    for (let i = 0; i < files.length; i++) {
      const video = document.createElement("video");
      const canvas = document.createElement("canvas");
      video.src = URL.createObjectURL(files[i]);
      video.load();
      video.muted = true;
      video.playsInline = true;
      video.play();
      video.onloadeddata = function () {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        setTimeout(() => {
          canvas
            .getContext("2d")
            .drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
          files[i].id = uuidv4();
          files[i].thumbnail = canvas.toDataURL();
          files[i].duration = video.duration * 1000;
          setVideos((videos) => [...videos, files[i]]);
        }, 100);
      };
    }
  }

  function handleVideoDelete(videoId) {
    setVideos((videos) => videos.filter((video) => video.id !== videoId));
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
        maxHeight="80%"
        display="flex"
        flexDirection="column"
      >
        <Box paddingX={1} paddingY={1.25} borderBottom={1} borderColor="#ddd">
          <Typography fontWeight={700}>Upload a Video</Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          marginY={3}
        >
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
          <Typography fontWeight={700} marginTop={2}>
            Supported file formats : mp4, webp, mkv. etc.
          </Typography>
          <Typography>
            Select multiple videos from your local storage.
          </Typography>
          {videos.length === 0 && (
            <>
              <Typography marginY={2}>or</Typography>
              <Button
                sx={{
                  fontWeight: "700",
                  color: "#42526E",
                  backgroundColor: "#091E420A",
                }}
              >
                Import from Library
              </Button>
            </>
          )}
        </Box>
        <Box borderTop={1} borderColor="#ddd" sx={{ overflow: "auto" }}>
          {videos.map((video) => (
            <VideoItem
              key={video.id}
              videoFile={video}
              onDelete={handleVideoDelete.bind(this, video.id)}
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
            disabled={videos.length === 0}
            onClick={onClose}
          >
            Create
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

function VideoItem({ videoFile, onDelete }) {
  return (
    <Grid
      container
      sm={12}
      padding={2}
      alignItems="center"
      borderBottom={1}
      borderColor="#ddd"
    >
      <Grid item sm={2} border={1}>
        <img
          height="100%"
          width="100%"
          style={{ objectFit: "contain" }}
          src={videoFile.thumbnail}
          alt={videoFile.name}
        />
      </Grid>
      <Grid item sm={6} marginX={3}>
        {videoFile.name}
      </Grid>
      <Grid item sm={2}>
        {getFormattedTime(videoFile.duration)}
      </Grid>
      <Grid item sm={1}>
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
