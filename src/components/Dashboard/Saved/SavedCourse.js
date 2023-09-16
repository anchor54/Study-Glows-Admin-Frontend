import { useState, useEffect } from "react";
import { Button, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";

import Divider from "../../Tools/Divider";
import Loader from "../../Tools/Loader";

import privateAxios from "../../../axios/privateAxios";

import "./Saved.scss";

const SavedCourse = () => {
  const [courseData, setCourseData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);

  useEffect(() => {
    const loadSavedCourse = () => {
      setLoading(true);
      privateAxios
        .get("/course/saved")
        .then((res) => {
          setLoading(false);
          res?.data.length > 0 ? setCourseData(res.data) : setNoData(true);
        })
        .catch((e) => console.log(e));
    };

    /** load saved blogs */
    loadSavedCourse();
  }, []);

  const getCourseLink = (category, id) => {
    const category_name = category.length > 0 ? category[0]?.type : "";
    switch (category_name) {
      case "Academic":
        return `/courses/academic/${id}`;

      case "NonAcademic":
        return `/courses/non-academic/${id}`;

      default:
        return "";
    }
  };

  const handleDelete = (course) => {
    const deleteSaveReading = (course) => {
      privateAxios
        .post(`course/${course?.id}/unsave`)
        .then((res) => {
          let idx = courseData.indexOf(course);
          setCourseData((pre) => {
            return [...pre.slice(0, idx), ...pre.slice(idx + 1)];
          });
        })
        .catch((e) => console.log(e));
    };
    course?.id && deleteSaveReading(course);
  };

  return (
    <div className="savedCourse">
      <h1>Saved Courses</h1>
      <Divider customStyle={{ backgroundColor: "#1A7FBE" }} />
      {loading && <Loader />}
      {noData ? (
        <div className="noData">
          <img src="/images/dashboard/null_savecourses.svg" alt="" />
          <Button variant="contained">
            <NavLink to={"/courses/academic"} className="buttonLink">
              Explore Courses
            </NavLink>
          </Button>
        </div>
      ) : (
        <div className="content">
          {courseData &&
            courseData.map((item) => (
              <div className="card" key={`saved-course-${item.id}`}>
                <div>
                  <div>
                    <img src="/images/dashboard/myCourse.svg" alt="courses" />
                  </div>
                  <div>{item.title}</div>
                </div>
                <div>
                  <Button variant="outlined" size="small">
                    <NavLink to={getCourseLink(item.category, item.id)} className="buttonLink">
                      Learn More
                    </NavLink>
                  </Button>
                  <Button variant="contained" size="small">
                    Enroll
                  </Button>
                  <IconButton size="small" onClick={() => handleDelete(item)}>
                    <img src="/images/dashboard/delete.svg" alt="delete" />
                  </IconButton>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default SavedCourse;
