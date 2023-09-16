import { Button, Dialog } from "@mui/material";

export const SubmitModal = ({ open, handleClose, handleSubmitTest }) => {
  return (
    <Dialog
      className="submitDialog"
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { overflowY: "visible" } }}
      maxWidth="md"
    >
      <div className="closeIcon" onClick={handleClose}>
        <img className="fluid-image" src="/images/login/close.svg" alt="close" />
      </div>
      <div className="content">
        <div className="wrapper">
          <div>
            <img
              className="fluid-image"
              src="/images/testset/submit_illustrator.svg"
              alt="submit"
            />
          </div>
          <div>
            <h1 className="headline_small">Are you sure you want to submit?</h1>
            <Button variant="contained" onClick={handleSubmitTest}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
