import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import CardImage from "../../Tools/CardImage";

import "./CourseCard.scss";

const CourseCard = ({
  course,
  buttonColor = "primary",
  courseRedirect = "",
  btnContent = "LEARN MORE",
}) => {
  const defaultThumbnail = "/images/courses/thumbnail.png";
  const thumbnail = course?.thumbnail;

  return (
    <div className="courseCard">
      <Link to={courseRedirect} className="buttonLink">
        <div className="thumbnail">
          <CardImage thumbnail={thumbnail} defaultThumbnail={defaultThumbnail} alt={course.alt} />
        </div>
        <div className="title">
          <p className="title_large">{course.title}</p>
        </div>
        <div className="link">
          <Button variant="contained" color={buttonColor}>
            {btnContent}
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;
