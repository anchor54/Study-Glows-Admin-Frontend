/* eslint-disable react-hooks/exhaustive-deps */
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { IconButton, LinearProgress } from "@mui/material";
import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";

import privateAxios from "../../../axios/privateAxios";

import "./LearningHeader.scss";

export const LectureHeader = ({ course }) => {
  const [courseProgress, setCourseProgress] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourseprogress = (courseId) => {
      setLoading(true);
      privateAxios
        .get("/mycourses/progress", { params: { course_id: courseId } })
        .then((res) => {
          setLoading(false);
          res?.data.length > 0 && setCourseProgress(res?.data[0]);
        })
        .catch((e) => console.log(e));
    };

    course?.id && fetchCourseprogress(course?.id);
  }, []);

  return (
    <div className="courseTitle">
      <div>
        <NavLink to={`/dashboard/courses`} className="buttonLink">
          <IconButton>
            <ArrowBackTwoToneIcon />
          </IconButton>
        </NavLink>
      </div>
      <div className="title">{course?.title}</div>
      {!loading && courseProgress?.progress !== "" && (
        <div className="progress">
          <div>
            <LinearProgress
              variant="determinate"
              value={courseProgress?.progress}
              color="warning"
            />
          </div>
          {courseProgress?.progress}% complete
        </div>
      )}
    </div>
  );
};
