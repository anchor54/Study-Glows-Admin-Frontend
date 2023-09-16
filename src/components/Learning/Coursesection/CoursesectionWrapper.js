import { IconButton } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export const CoursesectionWrapper = ({
  section,
  open_status = false,
  index,
  handleOpenSection,
}) => {
  const openClassName = open_status ? "open" : "close";
  return (
    <div className="coursesectionWrapper">
      <div className="title_large">{section}</div>
      <div>
        <IconButton onClick={() => handleOpenSection(index)} className={`${openClassName} arrow`}>
          <KeyboardArrowUpIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};
