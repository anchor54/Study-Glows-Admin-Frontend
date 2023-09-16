import { useEffect, useState } from "react";
import { keyframes, LinearProgress } from "@mui/material";

import Divider from "../../Tools/Divider";
import privateAxios from "../../../axios/privateAxios";

import "./MyTestSeries.scss";

const CourseProgress = () => {
  const [courseProgress, setCourseProgress] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourseprogress = () => {
      setLoading(true);
      privateAxios
        .get("/mycourses/progress")
        .then((res) => {
          setLoading(false);
          setCourseProgress(res?.data);
        })
        .catch((e) => console.log(e));
    };
    fetchCourseprogress();
  }, []);

  return (
    !loading &&
    courseProgress.length > 0 && (
      <>
        <div className="courseProgress">
          <h1>Progress</h1>
          <Divider customStyle={{ backgroundColor: "#1A7FBE" }} />
          <div className="progress">
            {courseProgress.map(
              (item, key) =>
                item?.progress !== "" && (
                  <div className="progress-item" key={`progress-item-${keyframes}`}>
                    <strong>{item?.course?.title}</strong>
                    <LinearProgress variant="determinate" value={item?.progress} />
                    <p>{item?.progress}% Complete</p>
                  </div>
                )
            )}
          </div>
        </div>
      </>
    )
  );
};

export default CourseProgress;
