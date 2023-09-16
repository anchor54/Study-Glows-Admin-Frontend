import { Alert, AlertTitle, Snackbar } from "@mui/material";

const Toast = ({ showToast, setShowToast }) => {
  const timeout = 6000;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowToast(false);
  };
  return (
    <Snackbar open={showToast.status} autoHideDuration={timeout} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
      <Alert severity={showToast.type} onClose={handleClose}>
        <AlertTitle>{showToast.type}</AlertTitle>
        {showToast.type === "success" ? showToast.successMessage : showToast.errorMessage}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
