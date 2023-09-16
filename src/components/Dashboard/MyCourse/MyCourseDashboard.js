import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import Divider from "../../Tools/Divider";
import Loader from "../../Tools/Loader";
import privateAxios from "../../../axios/privateAxios";
import CourseCard from "../../Course/CourseCard/CourseCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./MyCourse.scss";

const MyCourseDashboard = () => {
  const [myCoursesData, setMyCoursesData] = useState([]);
  const [noData, setNoData] = useState(false);
  const [loading, setLoading] = useState(false);
  const swiperSetting = getSwipersetting();

  useEffect(() => {
    const loadMyCourse = () => {
      setLoading(true);
      privateAxios
        .get("/mycourses")
        .then((res) => {
          res?.data.length > 0 ? setMyCoursesData(res?.data) : setNoData(true);
          setLoading(false);
        })
        .catch((e) => console.log(e));
    };

    loadMyCourse();
  }, []);

  const getCourseRedirectLink = (course) => {
    return `/study/mycourses/${course.id}`;
  };

  return (
    <div className="myCourseContainer">
      <div className="myCourseHeaderWrapper">
        <h1>My Courses</h1>
        <Button variant="contained" size="small">
          <NavLink to={"/courses/academic"} className="buttonLink">
            Explore More
          </NavLink>
        </Button>
      </div>
      <Divider customStyle={{ backgroundColor: "#1A7FBE" }} />
      {loading && <Loader />}
      {noData ? (
        <div className="noData">
          <img src="/images/dashboard/null_my_courses.svg" alt="" />
          <Button variant="contained">
            <NavLink to={"/courses/academic"} className="buttonLink">
              Browse Course
            </NavLink>
          </Button>
        </div>
      ) : (
        <div className="content">
          <Swiper {...swiperSetting}>
            {myCoursesData.map((item) => (
              <SwiperSlide key={`course-collection-${item.id}`}>
                <CourseCard
                  course={item}
                  courseRedirect={getCourseRedirectLink(item)}
                  btnContent="continue"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <IconButton className="rightArrow">
            <ArrowRightAltIcon fontSize="small" />
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default MyCourseDashboard;

const getSwipersetting = () => {
  return {
    navigation: {
      nextEl: ".rightArrow",
    },
    slidesPerView: "auto",
    // spaceBetween: 30,
    modules: [Navigation],
    className: "mySwiper",
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };
};
