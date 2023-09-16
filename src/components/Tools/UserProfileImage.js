import { Avatar, IconButton } from "@mui/material";

export const UserProfileImage = ({
  profileSrc = "",
  name = "",
  iconButton = false,
  sx = { width: "2rem", height: "2rem" },
}) => {
  const updatedName = name !== "" ? name.slice(0, 2) : "SG";
  const alt = name !== "" ? name : "profile";

  return profileSrc !== "" ? (
    <IconButton disabled={iconButton}>
      <Avatar src={profileSrc} alt={alt} sx={sx} />
    </IconButton>
  ) : (
    <IconButton disabled={iconButton}>
      <Avatar sx={{ backgroundColor: "#0474ba", ...sx }}>{updatedName}</Avatar>
    </IconButton>
  );
};
