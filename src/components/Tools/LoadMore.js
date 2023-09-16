import { Button } from "@mui/material";

export const LoadMore = ({
  color = "primary",
  text = "View More",
  handleLoadButton,
  variant = "text",
}) => {
  return (
    <div style={{ textAlign: "center", margin: "0.5rem" }}>
      <Button color={color} sx={{ fontWeight: "600" }} onClick={handleLoadButton} variant={variant}>
        {text}
      </Button>
    </div>
  );
};
