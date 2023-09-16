import { TextField } from "@mui/material";

import "./BlogNavbar.scss";

const BlogNavbar2 = ({ blogType }) => {
  return (
    <>
      <div className="blogNavbar2">
        <div className="item-1">
          <div>
            <h3>
              {blogType === "current_affairs"
                ? "Current Affairs for"
                : "Editorials of"}
            </h3>
          </div>
          <div>
            <TextField
              variant="outlined"
              required
              type="date"
              size="small"
              className="date-field"
              sx={{ background: "#FEEACD", width: "25vw" }}
            />
          </div>
        </div>
        <div className="item-2">
          <TextField
            variant="outlined"
            type="search"
            size="small"
            sx={{ background: "#FEEACD" }}
          />
        </div>
      </div>
      <div className="divider"></div>
    </>
  );
};

export default BlogNavbar2;
